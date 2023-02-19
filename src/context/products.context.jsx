/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React, { useState, createContext } from 'react';
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
