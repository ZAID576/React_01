import React from 'react'

const Navbar = ({setisCartOpen}) => {
  return (
    <div className='h bg-amber-200 rounded p-5 flex items-center justify-between'>
      <div>Logo</div>
      <div className='flex gap-4'>
        <p onClick={()=>setisCartOpen(false)}>Home</p>
        <p onClick={()=>setisCartOpen(true)}>Cart</p>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
