import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import './App.css';
import AuthProvider from '@/auth/AuthProvider';
import RequireAuth from '@/auth/RequireAuth';
import AfterAuth from '@/pages/AfterAuth';
import Login from '@/pages/Login';
import { Spinner } from '@/components/ui/spinner';
import { CALLBACK_PATH } from '@/config/auth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path={CALLBACK_PATH}
          element={
            <LoginCallback
              loadingElement={
                <div className='flex min-h-screen items-center justify-center'>
                  <Spinner className='size-6' />
                </div>
              }
            />
          }
        />
        <Route element={<RequireAuth />}>
          <Route path='/after-auth' element={<AfterAuth />} />
        </Route>
        <Route path='*' element={<Navigate to='/after-auth' replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
