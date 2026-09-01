import React from 'react'

const Register = ({setToggle}) => {
  return (
    <div className='bg-white w-90 p-6 rounded-2xl flex flex-col gap-4'>

        <form action="" className='flex flex-col gap-4'>

          <h1>Register</h1>

            <input  className='p-2 border border-gray-400 rounded' type="text" placeholder='Name' />

            <input  className='p-2 border border-gray-400 rounded' type="text" placeholder='Email' />

            <input  className='p-2 border border-gray-400 rounded' type="text" placeholder='Password' />

            <button className='p-2 bg-blue-600 text-white rounded'>Register</button>

        </form>

        <p>
            Already have an account! <span onClick={()=>{setToggle((prev) => !prev)}} className='text-blue-600 cursor-pointer'>Login here</span>
        </p>

    </div>
  )
}

export default Register
