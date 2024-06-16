import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstProject from './react1'
import RandomColorGenerator from "./project2/index.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FirstProject></FirstProject> */}
       <RandomColorGenerator/>
    </>
  )
}

export default App
