import React from 'react';
import './App.css';
import CartContextProvider from './Context/ContextProvider';
import ProductPage from './Components/ProductPage';
import {Routes, Route} from 'react-router-dom'
import Cart from './Components/Cart';

function App() {
  return (
    <CartContextProvider>
      <div className="app bg-gray-100 min-h-screen p-6">
        <Routes>
          <Route path='/'  element={<ProductPage />}/>
          <Route path='/cart'  element={<Cart />}/>
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
