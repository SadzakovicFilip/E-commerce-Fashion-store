import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setOpen: () => {},
  data: [],
  setData: () => {},
});
const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [data, setData] = useState([
    { name: `hello` },
    { name: `world` },
    { name: "I did it" },
  ]);
  const contextValue = { data, setData, isCartOpen, setIsCartOpen };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
