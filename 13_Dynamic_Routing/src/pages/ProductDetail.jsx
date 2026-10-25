import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {
    const [singleProductData, setSingleProductData] = useState({})
    console.log(singleProductData)
    let {id} = useParams()

    let getSingleProductsData = async ()=>{
    try{
        let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setSingleProductData(res.data);                       
    } catch (error){
        console.log("Detail API error", error)
    }
 }

 useEffect(() => {
    getSingleProductsData()
  }, [])

  return (
    <div>
      <h1>this is product detail dynamic page </h1>
    </div>
  )
}

export default ProductDetail
