import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import KPIDetails from "../pages/KPIDetails";
import { dashboardRoutes } from "./dashboardRoutes";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={dashboardRoutes.root} replace />} />
            <Route path={dashboardRoutes.root} element={<Dashboard />} />
            <Route path={dashboardRoutes.kpiDetailPattern} element={<KPIDetails />} />
        </Routes>
    );
}