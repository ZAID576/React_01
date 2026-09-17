import React, { useEffect } from 'react'

const About = () => {

  let interval = setInterval(() => {
    console.log('this is about')
  }, 1000) 

  
useEffect(()=>{
console.log("About rendering")

    return ()=>{
        clearInterval(interval)
        console.log("im triggered kuki about ja chuka hai")
    }
},[])


  return (
    <div>
      <h1>
        This is about
      </h1>
    </div>
  )
}

export default About
