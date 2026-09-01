import React from 'react'

const Navbar = ({ setIsCardOpen }) => {
  return (
    <div className='h bg-amber-200 rounded p-5 flex items-center justify-between'>
      <div>Logo</div>
      <div className='flex gap-4'>
        <p onClick={() => setIsCardOpen(true)}>Home</p>
        <p onClick={() => setIsCardOpen(false)}>Cart</p>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
