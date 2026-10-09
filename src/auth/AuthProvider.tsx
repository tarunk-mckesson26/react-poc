import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { Security, useOktaAuth } from "@okta/okta-react";
import { toRelativeUrl, type OktaAuth } from "@okta/okta-auth-js";
import { AuthContext, type AuthStatus } from "./auth-context";
import { oktaAuth } from "./oktaAuth";
import { oktaConfig } from "@/config/auth";

/**
 * Re-establishes an existing session without prompting the user.
 *
 * Deliberately avoids `session.exists()`: that hits the Okta org domain with
 * credentials, so it is blocked by third-party cookie policies (and always
 * fails from a localhost dev origin). Refresh tokens are the supported
 * replacement, with `getWithoutPrompt` as the SSO fallback.
 */
const restoreSession = async (client: OktaAuth) => {
  // The /login/callback route owns the authorization code exchange.
  if (client.isLoginRedirect()) return;

  const { accessToken, idToken, refreshToken } = await client.tokenManager.getTokens();
  if (accessToken && idToken) return;

  if (refreshToken) {
    client.tokenManager.setTokens(await client.token.renewTokens());
    return;
  }

  // Default iframe timeout is 2 minutes; fail fast since there's usually no SSO session to find.
  const { tokens } = await client.token.getWithoutPrompt({
    scopes: oktaConfig.scopes,
    timeout: 5000,
  });
  client.tokenManager.setTokens(tokens);
};

/** Bridges Okta's authState onto the app's auth context. */
const AuthStateBridge = ({ children }: { children: ReactNode }) => {
  const { oktaAuth: client, authState } = useOktaAuth();
  const [silentCheck, setSilentCheck] = useState<"pending" | "done">("pending");
  const silentCheckStarted = useRef(false);

  useEffect(() => {
    if (!authState || silentCheckStarted.current) return;
    silentCheckStarted.current = true;

    void (async () => {
      try {
        if (!authState.isAuthenticated) await restoreSession(client);
      } catch (error) {
        // No silent session available; the user signs in interactively.
        console.debug("Okta session restore skipped:", error);
      } finally {
        setSilentCheck("done");
      }
    })();
  }, [authState, client]);

  const status: AuthStatus = useMemo(() => {
    if (authState?.isAuthenticated) return "authenticated";
    if (!authState || silentCheck === "pending") return "loading";
    return "unauthenticated";
  }, [authState, silentCheck]);

  const username = useMemo(() => {
    const claims = authState?.idToken?.claims;
    return (claims?.name ?? claims?.preferred_username ?? claims?.email ?? null) as
      | string
      | null;
  }, [authState]);

  const signIn = useCallback(
    (originalUri?: string) =>
      client.signInWithRedirect({
        originalUri: originalUri ?? client.getOriginalUri() ?? "/after-auth",
      }),
    [client],
  );

  const signOut = useCallback(async () => {
    await client.signOut();
  }, [client]);

  const value = useMemo(
    () => ({ status, username, signIn, signOut }),
    [status, username, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const restoreOriginalUri = useCallback(
    async (_oktaAuth: OktaAuth, originalUri?: string) => {
      navigate(toRelativeUrl(originalUri || "/", window.location.origin), {
        replace: true,
      });
    },
    [navigate],
  );

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <AuthStateBridge>{children}</AuthStateBridge>
    </Security>
  );
};

export default AuthProvider;
