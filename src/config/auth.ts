const env = import.meta.env;

const origin = typeof window === "undefined" ? "" : window.location.origin;

/** Route in this SPA that Okta redirects back to; must be registered on the Okta app. */
export const CALLBACK_PATH = "/login/callback";

/** Okta is the identity provider for this SPA; the app is a public PKCE client. */
export const oktaConfig = {
  issuer: env.VITE_OKTA_ISSUER ?? "",
  clientId: env.VITE_OKTA_CLIENT_ID ?? "",
  redirectUri: env.VITE_OKTA_REDIRECT_URI ?? `${origin}${CALLBACK_PATH}`,
  postLogoutRedirectUri: env.VITE_OKTA_POST_LOGOUT_REDIRECT_URI ?? `${origin}/login`,
  scopes: (env.VITE_OKTA_SCOPES ?? "openid profile email offline_access")
    .split(/[\s,]+/)
    .filter(Boolean),
};

/** Backend origin for the public health check and the authenticated Solutions Panel calls. */
export const apiConfig = {
  baseUrl: (env.VITE_API_BASE_URL ?? "").replace(/\/$/, ""),
};

if (!oktaConfig.issuer || !oktaConfig.clientId) {
  console.error(
    "Okta is not configured: set VITE_OKTA_ISSUER and VITE_OKTA_CLIENT_ID (see .env.example).",
  );
}
