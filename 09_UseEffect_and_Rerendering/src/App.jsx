import React, { useEffect, useState } from 'react'
import About from './Components/About'
import Contact from './Components/Contact'

const App = () => {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    console.log('useEffect called')
    console.log("hey")
  }, []) 


  return (
    <div>
      <h1>Count is {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(prev => !prev)}>Change toggle state</button>


      {
        toggle ? <Contact/>  : <About/>
      }

    </div>
  )
}

export default App
