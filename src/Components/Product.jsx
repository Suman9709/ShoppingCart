import React, { useContext } from 'react'
import CartContext from '../Context/CartContext';
// import CartContext from '../../../shopingcart/src/Context/CartContext'

const Product = ({product}) => {
    const{AddToCart} = useContext(CartContext);
  return (
    <div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <button onClick={()=>AddToCart(product)}>AddToCart</button>
    </div>
  )
}

export default Product