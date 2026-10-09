import { useState } from 'react';
import {
  Bell,
  BadgeCheck,
  ChartColumn,
  ChevronsUpDown,
  CircleAlert,
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
  Route,
} from 'lucide-react';
import './App.css';
import { SideNav } from './layouts/sideNav';
import { componentDemos } from './layouts/sideNav/componentDemos';

const icons: Record<string, React.ReactNode> = {
  alert: <CircleAlert />,
  accordion: <Rows3 />,
  avatar: <CircleUser />,
  badge: <BadgeCheck />,
  'bar-chart': <ChartColumn />,
  breadcrumb: <Route />,
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

  const active = componentDemos.find((demo) => demo.id === activeId) ?? componentDemos[0];

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
    </div>
  );
};

export default App;