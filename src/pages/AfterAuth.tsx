import { useAuth } from "@/auth/auth-context";
import BarChartDemo from "@/components/BarChart";
import SolutionsPanel from "@/components/SolutionsPanel";
import { Button } from "@/components/ui/Button";

const AfterAuth = () => {
  const { username, signOut } = useAuth();

  return (
    <main className="mx-auto max-w-[1000px] p-6">
      <header className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Welcome, {username}</h1>
          <p className="text-sm text-muted-foreground">
            This page is only reachable with an active Okta session.
          </p>
        </div>
        <Button variant="secondary" onClick={() => void signOut()}>
          Sign out
        </Button>
      </header>

      <BarChartDemo />
      <SolutionsPanel />
    </main>
  );
};

export default AfterAuth;
