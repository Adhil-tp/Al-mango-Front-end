import React, { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addTOCart = (product) => {
        setCartItems([...cartItems, product])
    }
    return (
        <CartContext.Provider value={{ cartItems, addTOCart }}>
            {children}
        </CartContext.Provider>
    )
}
