
import './App.css'
import FunnelIcon from './components/FunnelIcon'
import SparkleIcon from './components/SparkleIcon'

function App() {
  
  return (
    <div className='animation-container'>
      <div className='shapes-container'>
        <SparkleIcon width='100' height='100' color='white'/>
        <FunnelIcon />
      </div>
      <div className='elevate-text'>ELEVATE</div>
    </div>
  )
}

export default App
