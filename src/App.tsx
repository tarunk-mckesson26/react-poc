import './App.css';
import BarChartDemo from './components/BarChart';
import LineGraphDemo from './components/LineGraph';
import SolutionsPanel from './components/SolutionsPanel';

function App() {

  return (
    <div className='max-w-[1000px] mx-auto'>
      <BarChartDemo />
      <LineGraphDemo />
      <SolutionsPanel />
    </div>
  )
}

export default App
