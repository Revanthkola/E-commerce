import React, { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

// Provide context to components
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add item to cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
