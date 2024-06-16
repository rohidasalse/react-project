import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstProject from './react1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstProject></FirstProject>
    </>
  )
}

export default App
