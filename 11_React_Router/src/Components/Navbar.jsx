import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-4 bg-yellow-200 h-10 p-3">
        <h1>Logo</h1>

        <div className="flex items-center gap-6 justify-between">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <button>Login</button>
      </nav>
  )
}

export default Navbar
