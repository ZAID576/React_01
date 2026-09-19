import React from 'react'
import { useNavigate } from 'react-router'
import { Outlet } from 'react-router'

const About = () => {
 let navigate = useNavigate();

  return (
    <div>
      <h1>This is about</h1>
      <button onClick={()=>navigate("/about/nested")}>Show me nested</button>
      <Outlet />
    </div>
  )
}

export default About
