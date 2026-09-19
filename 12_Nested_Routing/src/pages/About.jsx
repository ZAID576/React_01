import React from 'react'
import { Outlet } from 'react-router'

const About = () => {
  return (
    <div>
      This is about
      <Outlet />
    </div>
  )
}

export default About
