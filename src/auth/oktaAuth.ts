import { OktaAuth } from '@okta/okta-auth-js';

const issuer = import.meta.env.VITE_OKTA_ISSUER;
const clientId = import.meta.env.VITE_OKTA_CLIENT_ID;

export const isOktaConfigured = Boolean(issuer && clientId);

const oktaAuth = isOktaConfigured
  ? new OktaAuth({
      issuer,
      clientId,
      redirectUri: `${window.location.origin}/login/callback`,
      scopes: ['openid', 'profile', 'email', 'era_userdata', 'offline_access'],
      pkce: true,
    })
  : undefined;

let authPromise: Promise<string | undefined> | undefined;

/** Checks the Okta browser session and returns an access token when available. */
export const ensureAuthenticated = (): Promise<string | undefined> => {
  authPromise ??= (async () => {
    if (!oktaAuth) return undefined;

    if (oktaAuth.isLoginRedirect()) {
      await oktaAuth.handleLoginRedirect();
      return oktaAuth.getAccessToken();
    }

    if (!(await oktaAuth.session.exists())) return undefined;

    const { tokens } = await oktaAuth.token.getWithoutPrompt({
      responseType: ['token', 'id_token'],
      scopes: ['openid', 'profile', 'email', 'era_userdata', 'offline_access'],
    });
    oktaAuth.tokenManager.setTokens(tokens);

    return oktaAuth.getAccessToken();
  })();

  return authPromise;
};

/** Redirects the browser to Okta to sign in. */
export const signInWithOkta = async (): Promise<void> => {
  if (!oktaAuth) throw new Error('Okta is not configured.');
  await oktaAuth.signInWithRedirect({ originalUri: window.location.origin });
};

/** Ends the Okta session and returns the browser to the app. */
export const signOutFromOkta = async (): Promise<void> => {
  if (!oktaAuth) return;
  await oktaAuth.signOut({ postLogoutRedirectUri: window.location.origin });
};
