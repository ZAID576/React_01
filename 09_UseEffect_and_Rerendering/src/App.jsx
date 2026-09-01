import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    console.log('useEffect called')
  }, [toggle]) 
  return (
    <div>
      <h1>Count is {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(prev => !prev)}>Change toggle state</button>
    </div>
  )
}

export default App
