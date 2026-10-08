import { OktaAuth } from '@okta/okta-auth-js';

export const oktaAuth = new OktaAuth({
  issuer: import.meta.env.VITE_OKTA_ISSUER,
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid', 'profile', 'email', 'era_userdata', 'offline_access'],
  pkce: true,
});

// Memoized so StrictMode's double effect run doesn't exchange the auth code twice.
let authPromise: Promise<string | undefined> | undefined;

/** Resolves with the access token, or undefined while a redirect to Okta is in progress. */
export const ensureAuthenticated = (): Promise<string | undefined> => {
  authPromise ??= (async () => {
    if (oktaAuth.isLoginRedirect()) {
      await oktaAuth.handleLoginRedirect();
      return undefined;
    }

    if (!(await oktaAuth.isAuthenticated())) {
      await oktaAuth.signInWithRedirect({ originalUri: window.location.href });
      return undefined;
    }

    return oktaAuth.getAccessToken();
  })();

  return authPromise;
};
