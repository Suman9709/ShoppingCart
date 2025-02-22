import React, { useContext, useState } from 'react';
import CartContext from '../Context/CartContext';

const Cart = () => {
    const { cartItems = [], RemoveFromCart, ClearCart,DecreaseProduct,IncreaseProduct, TotalCartItem } = useContext(CartContext);

    return (
        <div>
            <h1>Shopping Cart</h1>
            <h1>TotalCartItem:{TotalCartItem()}</h1>
            {cartItems.length === 0 ? (
                <p>Cart is Empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.price} - {item.quantity}
                            <button onClick={()=>IncreaseProduct(item.id)}>+</button>
                            <button onClick={()=>DecreaseProduct(item.id)}>-</button>
                            <button onClick={() => RemoveFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={ClearCart}>Clear</button>
        </div>
    );
};

export default Cart;
