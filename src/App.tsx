import { useState } from 'react'
import { Card } from './components/Card'
import { Naruto, Parallax } from './pages'
import { Home } from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <Parallax/>
    </div> 
  )
}

export default App
