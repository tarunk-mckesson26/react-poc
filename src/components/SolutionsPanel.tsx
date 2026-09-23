import { useEffect } from "react";

const SolutionsPanel = () => {
    useEffect(() => {
        fetch("/api/customer?customerName=All%20ACCOUNTS", {
            method: "GET",
            headers: {
                "accept": "application/json",
                "x-xsrf-token": "2b59e0d8-8567-49e8-aca0-e600bb76a4af",
            },
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => console.log("Solutions Panel Response:", data))
            .catch((err) => console.error("Solutions Panel Error:", err));
    }, []);

    useEffect(() => {
        fetch("/api/user/authenticated", {
            method: "GET",
            headers: {
                "accept": "application/json",
                "x-xsrf-token": "2b59e0d8-8567-49e8-aca0-e600bb76a4af",
            },
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => console.log("Authenticated State Response:", data))
            .catch((err) => console.error("Authenticated State Error:", err));
    }, []);

    return (
        <div className="w-full p-4">
            <h2 className="py-2 mb-4 text-center text-lg font-semibold">Solutions Panel</h2>
            <p className="text-center text-sm">Check console for response.</p>
        </div>
    );
}

export default SolutionsPanel;
