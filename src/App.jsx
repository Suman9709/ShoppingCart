import { useState } from 'react'
import './App.css'
import CartContextProvider from './Context/ContextProvider'
import products from './Data/ProductData'
import Cart from './Components/Cart'
import Product from './Components/Product'

function App() {

  return (
    <CartContextProvider>
      <div className='app'>
        <h1>Shopping Product </h1>
        <div className='product'>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}

        </div>
        <Cart />
      </div>


    </CartContextProvider>
  )
}

export default App
