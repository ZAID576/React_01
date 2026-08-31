import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 flex rounded items-center bg-amber-300 justify-between'>
      
      <div className='w-10'>
        <img className='rounded-full' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=996" alt="" />
      </div>

      <div className='flex gap-6 font-semibold'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <button onClick={()=>setToggle((prev) =>!prev)} className='p-2 bg-amber-700 text-white cursor-pointer rounded'>Create user</button>
   
    </div>
  )
}

export default Navbar
