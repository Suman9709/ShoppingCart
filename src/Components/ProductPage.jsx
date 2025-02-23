import React from 'react'
import Product from './Product'
// import Cart from './Cart'
import products from '../Data/ProductData'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Shopping Product
        </h1>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <button 
            onClick={() => navigate('/cart')} 
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition"
          >
            Go to Cart
          </button>
        </div>
    </div>
  )
}

export default ProductPage