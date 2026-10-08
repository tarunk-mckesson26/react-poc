import { useEffect, useState } from 'react';
import {
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
import { ensureAuthenticated } from './auth/oktaAuth';

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
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const loadSolutions = async () => {
      const accessToken = await ensureAuthenticated();
      if (!accessToken || controller.signal.aborted) return;

      setAuthenticated(true);

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
    };

    loadSolutions().catch((err) => {
      if (!controller.signal.aborted) console.error('Looker solutions error:', err);
    });

    return () => controller.abort();
  }, []);

  const active = componentDemos.find((demo) => demo.id === activeId) ?? componentDemos[0];

  if (!authenticated) {
    return (
      <div className='flex min-h-screen items-center justify-center text-sm text-slate-500'>
        Signing in...
      </div>
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
          <p className='text-sm text-slate-500'>{active.description}</p>
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
