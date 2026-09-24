import { useState } from 'react';
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import './App.css';
import { Avatar } from './components/ui/Avatar';
import { BarChart as ChartCard } from './components/ui/BarChart';
import { Input } from './components/ui/InputField';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './components/ui/chart';
import { avatarTest } from './assets';

function App() {
  const [activeTab, setActiveTab] = useState<'charts' | 'avatars' | 'inputs' | 'chart-card'>('charts');

  const chartCardData = [
    { name: 'Jan', value: 2100 },
    { name: 'Feb', value: 2600 },
    { name: 'Mar', value: 2300 },
    { name: 'Apr', value: 3100 },
    { name: 'May', value: 3800 },
    { name: 'Jun', value: 4200 },
  ];

  return (
    <div className='max-w-[1200px] mx-auto p-6'>
      <div className='mb-6 flex gap-2 border-b border-slate-200 pb-3'>
        
        <button
          type='button'
          onClick={() => setActiveTab('avatars')}
          className={[
            'rounded-md px-4 py-2 text-sm font-medium transition-colors',
            activeTab === 'avatars'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
          ].join(' ')}
        >
          Avatar Variants
        </button>

        <button
          type='button'
          onClick={() => setActiveTab('inputs')}
          className={[
            'rounded-md px-4 py-2 text-sm font-medium transition-colors',
            activeTab === 'inputs'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
          ].join(' ')}
        >
          Input Variants
        </button>

        <button
          type='button'
          onClick={() => setActiveTab('chart-card')}
          className={[
            'rounded-md px-4 py-2 text-sm font-medium transition-colors',
            activeTab === 'chart-card'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
          ].join(' ')}
        >
          Chart Card
        </button>
      </div>

      {activeTab === 'avatars' ? (
        <div className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm'>
          <h2 className='mb-6 text-xl font-semibold text-slate-900'>Avatar Variants</h2>

          <div className='flex flex-wrap items-center gap-8'>
            <div className='flex flex-col items-center gap-2'>
              <Avatar src={avatarTest} alt='Jane Doe' className='h-16 w-16' />
              <span className='text-sm text-slate-600'>Image</span>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <Avatar firstName='Jane' lastName='Doe' className='h-16 w-16' />
              <span className='text-sm text-slate-600'>Initials</span>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <Avatar icon={<span className='text-lg'>★</span>} className='h-16 w-16' />
              <span className='text-sm text-slate-600'>Icon</span>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <Avatar firstName='A' lastName='S' className='h-12 w-12 text-xs' />
              <span className='text-sm text-slate-600'>Small</span>
            </div>
          </div>
        </div>
      ) : activeTab === 'inputs' ? (
        <div className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm'>
          <h2 className='mb-6 text-xl font-semibold text-slate-900'>Input Variants</h2>

          <div className='space-y-5'>
            <div>
              <label className='mb-2 block text-sm font-medium text-slate-700'>Default</label>
              <Input placeholder='Enter your name' />
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-slate-700'>Outline</label>
              <Input variant='outline' placeholder='Outline input' />
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-slate-700'>Ghost</label>
              <Input variant='ghost' placeholder='Ghost input' />
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-slate-700'>Small</label>
              <Input size='sm' placeholder='Small input' />
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-slate-700'>Disabled</label>
              <Input disabled placeholder='Disabled input' />
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-slate-700'>Invalid</label>
              <Input invalid placeholder='Invalid input' />
            </div>
          </div>
        </div>
      ) : (
        <ChartCard
          title='Revenue Overview'
          chartTitle='Monthly revenue'
          linkText='View report'
          description='Revenue increased by 18% compared to the previous quarter.'
        >
          <ChartContainer config={{ value: { label: 'Revenue', color: '#22c55e' } }} className='h-[260px] w-full'>
            <RechartsBarChart data={chartCardData} margin={{ top: 12, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray='3 3' />
              <XAxis dataKey='name' tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey='value' fill='#22c55e' radius={[6, 6, 0, 0]} />
            </RechartsBarChart>
          </ChartContainer>
        </ChartCard>
      )}
    </div>
  );
}

export default App
