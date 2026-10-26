import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const About = () => {
  let navigate = useNavigate()

  return (
    <div>
      <h1>this is about</h1>
      <button onClick={() => navigate('/about/nested')}>Nested ko dekho</button>
      <Outlet />
    </div>
  )
}

export default About
