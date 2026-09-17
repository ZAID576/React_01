import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar'
import ProductsCard from './Components/ProductsCard'

const App = () => {
  const [products, setProducts] = useState([])

  const getProductsData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      setProducts(res.data)
    } catch (error) {
      console.log("Error in API", error)
    }
  }

  useEffect(() => {
    getProductsData()
  }, [])

  return (
    <div className='h-screen'>
      <Navbar />
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default App
