import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/auth/auth-context";
import { apiFetch } from "@/lib/http/apiClient";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/spinner";

const format = (value: unknown) =>
  typeof value === "string" ? value : JSON.stringify(value, null, 2);

const Login = () => {
  const { status, signIn } = useAuth();
  const location = useLocation();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname;

  const [health, setHealth] = useState<string | null>(null);

  useEffect(() => {
    void apiFetch("/api/public/hello", { auth: false })
      .then((data) => setHealth(format(data)))
      .catch((err) => setHealth(err instanceof Error ? err.message : String(err)));
  }, []);

  if (status === "authenticated") {
    return <Navigate to={from ?? "/after-auth"} replace />;
  }

  if (status === "loading") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-3 p-6">
        <Spinner className="size-6" />
        <p className="text-sm text-muted-foreground">Checking your session...</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <div className="w-full max-w-sm rounded-lg border border-border p-8 text-center">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Use your organisation account to continue.
        </p>
        <Button className="mt-6 w-full" onClick={() => void signIn(from)}>
          Sign in with Okta
        </Button>
      </div>

      <div className="w-full max-w-sm rounded-md border border-border p-3">
        <h2 className="text-xs font-semibold">GET /api/public/hello</h2>
        <pre className="mt-2 whitespace-pre-wrap break-all text-xs">
          {health ?? "Loading..."}
        </pre>
      </div>
    </main>
  );
};

export default Login;
