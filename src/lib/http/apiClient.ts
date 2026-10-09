import { oktaAuth } from "@/auth/oktaAuth";
import { apiConfig } from "@/config/auth";

export class ApiError extends Error {
  status: number;
  body: string;

  constructor(status: number, body: string) {
    super(`${status} - ${body || "request failed"}`);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

export interface ApiFetchOptions extends RequestInit {
  /** Public endpoints skip the bearer token so they work before sign-in. */
  auth?: boolean;
}

export const apiFetch = async <T = unknown>(
  path: string,
  { auth = true, ...init }: ApiFetchOptions = {},
): Promise<T> => {
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json, text/plain");

  if (auth) {
    // Renews the token when it is expired instead of sending a stale one.
    const accessToken = await oktaAuth.getOrRenewAccessToken();
    if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);
  }

  const response = await fetch(`${apiConfig.baseUrl}${path}`, {
    ...init,
    headers,
  });

  const raw = await response.text();

  if (!response.ok) {
    throw new ApiError(response.status, raw);
  }

  const isJson = response.headers.get("content-type")?.includes("application/json");
  return (isJson && raw ? JSON.parse(raw) : raw) as T;
};
