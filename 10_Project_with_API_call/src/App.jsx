import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar'
import ProductsCard from './Components/ProductsCard'
import CartScreen from './pages/CartScreen'

const App = () => {
  const [products, setProducts] = useState([])
  const [isCartOpen, setisCartOpen] = useState(false)
  const [cartItem, setcartItem] = useState([])

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
    <div className='h-screen p-2 flex flex-col gap-4'>
      <Navbar setisCartOpen={setisCartOpen} />


      {
        isCartOpen ? 
      <div className=''>  
       <CartScreen />
      </div>
      :  
      <div className='grid grid-cols-4 gap-4'>  
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} setcartItem={setcartItem}/>
      ))}
      </div>
      }  

    </div>
  )
}

export default App
