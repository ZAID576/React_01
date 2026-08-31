import React, { useState } from 'react'

const App = () => {
const [name, setName] = useState("zaid")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

console.log(name)
console.log(email)
console.log(password)
  
  return (
    <div className='flex flex-col gap-5 w-60'>
      <input value={name} onChange={(e)=> setName(e.target.value)} className='border-2' type="text" placeholder='Name'/>

      <input onChange={(e)=> setEmail(e.target.value)} className='border-2' type="text" placeholder='Email'/>
      
      <input onChange={(e)=> setPassword(e.target.value)} className='border-2' type="text" placeholder='Password'/>

      <button className='border-2'>Submit</button>

       <h1>this is -{name}</h1>
       <h1>this is -{email}</h1>
       <h1>this is -{password}</h1>

    </div>
  )
}

export default App