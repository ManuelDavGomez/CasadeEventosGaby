"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Cargar el carrito desde localStorage al inicio
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar el carrito en localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart"); // Elimina el carrito si está vacío
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.some((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      // Si el carrito queda vacío, elimina el cart de localStorage
      if (updatedCart.length === 0) {
        localStorage.removeItem("cart");
      }
      return updatedCart;
    });
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getProductTotalPrice = (id) => {
    const product = cart.find((item) => item.id === id);
    return product ? (product.price * product.quantity).toLocaleString("es-ES") : "0";
  };

  const getCartTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString("es-ES");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getTotalQuantity,
    
        getProductTotalPrice,
        getCartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
