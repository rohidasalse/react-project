import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstProject from './react1'
import RandomColorGenerator from "./project2/index.jsx"
import Rating from './project3(reting)/index.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <R></R> */}
      {/* <FirstProject></FirstProject> */}
       {/* <RandomColorGenerator/> */}
       <Rating onofStars={5}></Rating>
    </>
  )
}

export default App
