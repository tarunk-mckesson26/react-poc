import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/http/apiClient";

const format = (value: unknown) =>
  typeof value === "string" ? value : JSON.stringify(value, null, 2);

const SolutionsPanel = () => {
    const [customers, setCustomers] = useState<string | null>(null);
    const [authenticated, setAuthenticated] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await apiFetch("/api/customer?customerName=All%20ACCOUNTS");
                console.log("Solutions Panel Response:", data);
                setCustomers(format(data));
            } catch (err) {
                console.error("Solutions Panel Error:", err);
                setCustomers(err instanceof Error ? err.message : String(err));
            }
        };

        void load();
    }, []);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await apiFetch("/api/user/authenticated");
                console.log("Authenticated State Response:", data);
                setAuthenticated(format(data));
            } catch (err) {
                console.error("Authenticated State Error:", err);
                setAuthenticated(err instanceof Error ? err.message : String(err));
            }
        };

        void load();
    }, []);

    return (
        <div className="w-full p-4">
            <h2 className="py-2 mb-4 text-center text-lg font-semibold">Solutions Panel</h2>

            <div className="mb-4 rounded-md border border-border p-3">
                <h3 className="text-xs font-semibold">GET /api/user/authenticated</h3>
                <pre className="mt-2 whitespace-pre-wrap break-all text-xs">
                    {authenticated ?? "Loading..."}
                </pre>
            </div>

            <div className="rounded-md border border-border p-3">
                <h3 className="text-xs font-semibold">GET /api/customer?customerName=All ACCOUNTS</h3>
                <pre className="mt-2 max-h-64 overflow-auto whitespace-pre-wrap break-all text-xs">
                    {customers ?? "Loading..."}
                </pre>
            </div>
        </div>
    );
}

export default SolutionsPanel;
