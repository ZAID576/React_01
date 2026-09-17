import React, { useEffect, useState } from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import axios from "axios"

const App = () => {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)

  let getData = async() =>{
      let res = await axios.get("https://fakestoreapi.com/products")
  console.log(res)
  }

  getData()

  // useEffect(() => {
  //   console.log('useEffect called')
  //   console.log("hey")
  // }, []) 


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
