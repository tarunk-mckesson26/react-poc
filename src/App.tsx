import { useState, useEffect } from 'react';
import './App.css';
import BarChartDemo from './components/BarChart';
import LineGraphDemo from './components/LineGraph';
import SolutionsPanel from './components/SolutionsPanel';
import Login from './components/Login';
import axios from 'axios';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/user/authenticated');
        console.log('✓ Auth check response:', response, response.data);
        if (response.data && response.data !== 'Unauthenticated') {
          setAuthenticated(true);
        }
      } catch (err) {
        console.log('User not authenticated');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleAuthSuccess = () => {
    console.log('✓ User authenticated successfully');
    setAuthenticated(true);
  };

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading from here?...</div>;
  }

  console.log('authenticated :::', authenticated);
  if (!authenticated) {
    return <Login onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className='max-w-[1000px] mx-auto'>
      <BarChartDemo />
      <LineGraphDemo />
      <SolutionsPanel />
    </div>
  )
}

export default App
