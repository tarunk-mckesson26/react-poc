import { useState } from 'react';
import './App.css';
import BarChartDemo from './components/BarChart';
import LineGraphDemo from './components/LineGraph';
import { Avatar } from './components/ui/Avatar';
import { Input } from './components/ui/InputField';
import { avatarTest } from './assets';

function App() {
  const [activeTab, setActiveTab] = useState<'charts' | 'avatars' | 'inputs'>('charts');

  return (
    <div className='max-w-[1200px] mx-auto p-6'>
      <div className='mb-6 flex gap-2 border-b border-slate-200 pb-3'>
        <button
          type='button'
          onClick={() => setActiveTab('charts')}
          className={[
            'rounded-md px-4 py-2 text-sm font-medium transition-colors',
            activeTab === 'charts'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
          ].join(' ')}
        >
          Charts
        </button>

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
      </div>

      {activeTab === 'charts' ? (
        <div className='space-y-8'>
          <BarChartDemo />
          <LineGraphDemo />
        </div>
      ) : activeTab === 'avatars' ? (
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
      ) : (
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
      )}
    </div>
  );
}

export default App
