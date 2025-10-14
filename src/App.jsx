
import './App.css'
import FunnelIcon from './components/FunnelIcon'
import SparkleIcon from './components/SparkleIcon'

function App() {
  
  return (
    <div className='animation-container'>
      <div className='shapes-container'>
        <div className='sparkle'>
          <SparkleIcon width='150' height='150' color='white'/>
        </div> 
        <FunnelIcon />
      </div>
      <div className='elevate-text'>ELEVATE</div>
    </div>
  )
}

export default App
