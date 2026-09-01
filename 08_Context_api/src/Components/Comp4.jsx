import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext'

const Comp4 = () => {
   let cd = useContext(MyStore) // ye hook hume context se data access karne mai help karega
   console.log(cd) // ye hume context mai jo data hai wo console mai show karega

   return (
    <div>
      <h1>Component 4</h1>
    </div>
  )
}

export default Comp4
