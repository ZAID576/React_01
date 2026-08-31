import React, { use, useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({
  name : "",
  email : "",
  password : ""
});

console.log(formData)

  
  return (
    <div className='flex flex-col gap-5 w-60'>
      <input  onChange={(e)=>{setFormData({...formData, name : e.target.value})}} className='border-2' type="text" placeholder='Name'/>

      <input  onChange={(e)=>{setFormData({...formData, email : e.target.value})}} className='border-2' type="text" placeholder='Email'/>

      <input  onChange={(e)=>{setFormData({...formData, password : e.target.value})}} className='border-2' type="text" placeholder='Password'/>

      <button className='border-2'>Submit</button>


    </div>
  )
}

export default App
