import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/contact';
import NestedHome from '../pages/NestedHome';
import NestedAbout from '../pages/NestedAbout';


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Home />}>
         <Route path="nested-home" element={<NestedHome />}/>
        </Route>

        <Route path="/about" element={<About />}>
          <Route path="nested-about" element={<NestedAbout />}/>
        </Route>

        <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </div>
  )
}

export default AppRoutes
