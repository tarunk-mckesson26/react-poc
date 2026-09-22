import './App.css';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import BarChartDemo from './components/BarChart';
import LineGraphDemo from './components/LineGraph';
import SolutionsPanel from './components/SolutionsPanel';
import Dashboard from './components/pages/Dashboard';
import KPIDetails from './components/pages/KPIDetails';
import { dashboardRoutes } from './components/routes/dashboardRoutes';

function AppLayout() {
  const location = useLocation();
  const isDashboardPage =
    location.pathname === dashboardRoutes.root || location.pathname.startsWith(`${dashboardRoutes.root}/`);

  return (
    <div className={isDashboardPage ? 'mx-auto w-full max-w-[1400px]' : 'mx-auto max-w-[1000px]'}>
      {!isDashboardPage && (
        <div className='flex justify-end px-4 pt-4'>
          <Link
            to={dashboardRoutes.root}
            className='rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700'
          >
            View KPI Details
          </Link>
        </div>
      )}

      <Routes>
        <Route
          path='/'
          element={
            <>
              <BarChartDemo />
              <LineGraphDemo />
              <SolutionsPanel />
            </>
          }
        />
        <Route path={dashboardRoutes.root} element={<Dashboard />} />
        <Route path={dashboardRoutes.kpiDetailPattern} element={<KPIDetails />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
