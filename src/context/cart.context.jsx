/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
import React, { createContext, useState, useEffect } from 'react';

const removeCartItem = (cartItems, productToRemove) => cartItems.filter((cartItem) => (cartItem.id !== productToRemove.id ? cartItem : false));
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const quantityDecrement = (cartItems, product) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }
  // const newCartItems = cartItems.filter((cartItem) => cartItem.quantity > 1).map((cartItem) => (cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
  // console.log(newCartItems);
  return cartItems.map((cartItem) => (cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemQuantityDecrement: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const cartItemQuantityDecrement = (product) => {
    setCartItems(quantityDecrement(cartItems, product));
  };
  const value = {
    isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, cartItemQuantityDecrement, totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
