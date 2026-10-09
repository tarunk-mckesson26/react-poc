import { useEffect, useState } from 'react';
import {
  LogIn,
  LogOut,
  ShieldCheck,
  Bell,
  ChartColumn,
  ChevronsUpDown,
  CircleUser,
  ListOrdered,
  Loader,
  MessageSquare,
  MousePointerClick,
  PanelsTopLeft,
  Rows3,
  SlidersHorizontal,
  SquareCheck,
  SquareMousePointer,
  TextCursorInput,
  ToggleRight,
  ChartLine,
} from 'lucide-react';
import './App.css';
import { SideNav } from './layouts/sideNav';
import { Toaster } from './components/ui/Sonner';
import { componentDemos } from './layouts/sideNav/componentDemos';
import {
  ensureAuthenticated,
  isOktaConfigured,
  signInWithOkta,
  signOutFromOkta,
} from './auth/oktaAuth';

const icons: Record<string, React.ReactNode> = {
  accordion: <Rows3 />,
  avatar: <CircleUser />,
  'bar-chart': <ChartColumn />,
  'line-graph': <ChartLine />,
  button: <MousePointerClick />,
  checkbox: <SquareCheck />,
  combobox: <ChevronsUpDown />,
  input: <TextCursorInput />,
  pagination: <ListOrdered />,
  progress: <SlidersHorizontal />,
  select: <SquareMousePointer />,
  sonner: <Bell />,
  spinner: <Loader />,
  switch: <ToggleRight />,
  tabs: <PanelsTopLeft />,
  tooltip: <MessageSquare />,
};

const App = () => {
  const [activeId, setActiveId] = useState(componentDemos[0].id);
  const [collapsed, setCollapsed] = useState(false);
  const [authStatus, setAuthStatus] = useState<
    'loading' | 'signed-out' | 'signed-in' | 'error' | 'configuration-required'
  >('loading');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    // Cancel pending work if the component unmounts during authentication or fetch.
    const controller = new AbortController();

    const loadSolutions = async () => {
      if (!isOktaConfigured) {
        setAuthStatus('configuration-required');
        return;
      }

      try {
        const accessToken = await ensureAuthenticated();
        if (controller.signal.aborted) return;

        if (!accessToken) {
          setAuthStatus('signed-out');
          return;
        }

        setAuthStatus('signed-in');
        // A Looker API failure should not invalidate an otherwise successful sign-in.
        try {
          const response = await fetch('/api/looker/solutions', {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            signal: controller.signal,
          });
          if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

          const data = await response.json();
          console.log('Looker solutions:', data);
        } catch (error) {
          if (!controller.signal.aborted) console.error('Looker solutions error:', error);
        }
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error('Okta or Looker request error:', error);
        setAuthError(error instanceof Error ? error.message : 'Sign-in failed.');
        setAuthStatus('error');
      }
    };

    void loadSolutions();

    return () => controller.abort();
  }, []);

  const handleSignIn = async () => {
    setAuthError('');
    setAuthStatus('loading');
    try {
      await signInWithOkta();
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Sign-in failed.');
      setAuthStatus('error');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutFromOkta();
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Sign-out failed.');
      setAuthStatus('error');
    }
  };

  const active = componentDemos.find((demo) => demo.id === activeId) ?? componentDemos[0];

  if (authStatus !== 'signed-in') {
    return (
      <main className='flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12'>
        <section className='w-full max-w-sm border border-slate-200 bg-white p-8 shadow-sm'>
          <div className='mb-6 flex size-11 items-center justify-center bg-emerald-50 text-emerald-800'>
            <ShieldCheck aria-hidden='true' size={22} />
          </div>
          <p className='mb-2 text-xs font-semibold uppercase text-emerald-800'>
            Design System
          </p>
          <h1 className='text-2xl font-semibold text-slate-900'>Sign in</h1>
          <p className='mt-2 text-sm text-slate-600'>
            Continue with your organization’s Okta account.
          </p>

          {authStatus === 'configuration-required' ? (
            <div className='mt-6 border-l-2 border-amber-500 bg-amber-50 p-3 text-sm text-amber-950'>
              Configure <code>VITE_OKTA_ISSUER</code> and <code>VITE_OKTA_CLIENT_ID</code> to enable sign-in.
            </div>
          ) : null}

          {authError ? (
            <p role='alert' className='mt-5 text-sm text-red-700'>
              {authError}
            </p>
          ) : null}

          {authStatus === 'loading' ? (
            <p role='status' className='mt-6 text-sm text-slate-500'>
              Checking your Okta session…
            </p>
          ) : (
            <button
              type='button'
              onClick={handleSignIn}
              disabled={!isOktaConfigured}
              className='mt-6 inline-flex w-full items-center justify-center gap-2 bg-emerald-800 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 disabled:cursor-not-allowed disabled:opacity-50'
            >
              <LogIn aria-hidden='true' size={17} />
              Sign in with Okta
            </button>
          )}
        </section>
      </main>
    );
  }

  return (
    <div className='flex min-h-screen bg-slate-50'>
      <SideNav
        title='Design System'
        subtitle='Component gallery'
        activeId={activeId}
        onSelect={setActiveId}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        className='sticky top-0 h-screen'
        sections={[
          {
            id: 'components',
            title: 'Components',
            items: componentDemos.map((demo) => ({
              id: demo.id,
              label: demo.label,
              icon: icons[demo.id],
            })),
          },
        ]}
      />

      <main className='flex-1 overflow-y-auto p-8'>
        <header className='mb-6'>
          <h1 className='text-2xl font-semibold text-slate-900'>{active.label}</h1>
          <div className='flex items-center justify-between gap-4'>
            <p className='text-sm text-slate-500'>{active.description}</p>
            <button
              type='button'
              onClick={handleSignOut}
              className='inline-flex shrink-0 items-center gap-2 text-sm text-slate-600 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800'
            >
              <LogOut aria-hidden='true' size={16} />
              Sign out
            </button>
          </div>
        </header>

        <section className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm'>
          {active.render()}
        </section>
      </main>

      <Toaster />
    </div>
  );
};

export default App;
