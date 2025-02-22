import React, { useContext, useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const AddToCart = (cartProduct) => {

        setCartItems((prevItem) => {
            const existingProduct = prevItem.find(item => item.id === cartProduct.id);
            if (existingProduct) {
                return prevItem.map((item) =>
                    item.id === cartProduct.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            else {
                return [...prevItem, { ...cartProduct, quantity: 1 }]

            }
        })
    }
    const RemoveFromCart = (id) => {
        setCartItems(prevItem => prevItem.filter(item => item.id !== id))

    }
    const ClearCart = () => {
        setCartItems([]);
    }



    const IncreaseProduct = (id) => {
        setCartItems((prevItem) =>
            prevItem.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item

            )
        );
       

    }

    const DecreaseProduct = (id) => {
        setCartItems((prevItem) =>
            prevItem.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        )

    }
const TotalCartItem = ()=>{
    return cartItems.reduce((total, item)=>total+ item.quantity, 0)
}

    const Value = {
        cartItems,
        AddToCart,
        RemoveFromCart,
        ClearCart,
        IncreaseProduct,
        DecreaseProduct,
        TotalCartItem,
    }
    return (
        <CartContext.Provider value={Value}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider