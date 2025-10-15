import './App.css'
import FunnelIcon from './components/FunnelIcon'
import SparkleIcon from './components/SparkleIcon'
import { useState } from 'react'

function App() {

  const [key, setKey] = useState(0)
  
  return (
    <div className='animation-root' key={key}>
      <div className='animation-container'>
        <div className='shapes-container'>
          <div className='sparkle'>
            <SparkleIcon width='150' height='150' color='white'/>
          </div> 
          <FunnelIcon />
        </div>
        <div className='elevate-text'>ELEVATE</div>
      </div>
      <button onClick={() => setKey(k => k + 1)} className='replay-btn'>Replay</button>
    </div>
    
  )
}

export default App
