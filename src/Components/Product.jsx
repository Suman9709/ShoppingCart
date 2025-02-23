import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';

const Product = ({ product }) => {
    const { AddToCart } = useContext(CartContext);

    return (
        <div className="border-2 border-gray-400 flex flex-col p-3 shadow-lg gap-2 rounded-lg bg-white transition-transform transform hover:scale-105 w-48">
           <img 
                src={product.img} 
                alt={product.name} 
                className="w-24 h-24 object-cover mx-auto rounded-md"
            />

            <div className="font-semibold text-gray-700 text-center">
                <h2 className="text-md">{product.name}</h2>
                <p className="text-green-500 text-sm">Price: ${product.price}</p>
            </div>

            <button 
                onClick={() => AddToCart(product)} 
                className="bg-amber-300 text-black font-semibold p-1 rounded-md hover:bg-blue-500 hover:text-white transition w-full text-sm"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Product;
