import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartItems = [], RemoveFromCart, ClearCart, DecreaseProduct, IncreaseProduct, TotalCartItem } = useContext(CartContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Shopping Cart</h1>

            {/* Total Cart Items */}
            <div className="text-lg font-semibold text-center mb-4">
                <h1>Total Items: <span className="text-blue-500">{TotalCartItem()}</span></h1>
            </div>

            <div className=" p-4 rounded-lg">
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Cart is Empty</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {cartItems.map((item, index) => (
                            <li key={index} className="border-2 border-gray-600 p-4 rounded-lg shadow-md bg-white">
                                <img src={item.img} alt={item.name} className="w-full h-24 object-cover mx-auto rounded-md" />
                                <div className="flex flex-col items-center">
                                    <h2 className="font-bold text-lg text-gray-700">{item.name}</h2>
                                    <p className="text-gray-600">Price: <span className="text-green-500">${item.price}</span></p>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </div>

                                <div className="flex justify-center items-center gap-2 mt-3">
                                    <button
                                        onClick={() => IncreaseProduct(item.id)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => DecreaseProduct(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                                    >
                                        -
                                    </button>
                                </div>

                                <div className="text-center mt-3">
                                    <button
                                        onClick={() => RemoveFromCart(item.id)}
                                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="text-center mt-6">
                    <button
                        onClick={ClearCart}
                        className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
                    >
                        Clear Cart
                    </button>
                </div>
            )}

            <div className="text-center mt-4">
                <Link to="/" className="text-blue-500 underline">Back to Shopping</Link>
            </div>
        </div>
    );
};

export default Cart;
