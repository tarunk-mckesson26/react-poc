import { OktaAuth } from "@okta/okta-auth-js";
import { oktaConfig } from "@/config/auth";

export const oktaAuth = new OktaAuth({
  issuer: oktaConfig.issuer,
  clientId: oktaConfig.clientId,
  redirectUri: oktaConfig.redirectUri,
  postLogoutRedirectUri: oktaConfig.postLogoutRedirectUri,
  scopes: oktaConfig.scopes,
  pkce: true,
  // Survives a full page reload / new tab so the session is restored instead of re-prompting.
  tokenManager: { storage: "localStorage", autoRenew: true, expireEarlySeconds: 30 },
  services: { autoRenew: true, autoRemove: true, syncStorage: true },
});
