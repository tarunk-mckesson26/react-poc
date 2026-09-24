import './App.css';
import { DatePicker } from './components/ui/DatePicker';

const App = () => {
  return (
    <div className='mx-auto flex min-h-screen max-w-xl items-center justify-center bg-slate-100 p-6'>
      <div className='w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm'>
        <label className='mb-2 block text-sm font-medium text-slate-700'>Date</label>
        <DatePicker
          placeholder='Select a date'
          className='w-full'
          icon={<span aria-hidden='true'>📅</span>}
          iconPosition='left'
        />
      </div>
    </div>
  );
}

export default App
