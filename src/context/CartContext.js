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

    // Remove only one instance of the item from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex((item) => item.id === id);
            if (index === -1) return prevCart;

            const newCart = [...prevCart];
            newCart.splice(index, 1); // ✅ Removes only one instance
            return newCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
