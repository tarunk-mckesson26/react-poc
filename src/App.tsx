import './App.css';
import BarChartDemo from './components/BarChart';
import SolutionsPanel from './components/SolutionsPanel';
import ComponentsShowcase from './components/ComponentsShowcase';

function App() {

  return (
    <div className='max-w-[1000px] mx-auto'>
      <ComponentsShowcase />
      {/* <BarChartDemo /> */}
      <SolutionsPanel />
    </div>
  )
}

export default App
