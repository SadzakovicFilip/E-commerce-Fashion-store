import React, { useEffect, useState } from "react";
import { createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem === existingCartItem
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  isDrawerOpen: false,
});
const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeCheckoutItem = (item) => {
    const filteredItems = cartItems.filter(
      (products) => products.id !== item.id
    );
    setCartItems(filteredItems);
  };

  const increaseCheckoutItemQuantity = (item) => {
    const Increased = cartItems.map((product) => {
      return product === item
        ? { ...product, quantity: (product.quantity += 1) }
        : product;
    });
    setCartItems(Increased);
  };
  const closeCartDropdown = () => {
    setIsCartOpen(false);
  };
  const decreaseCheckoutItemQuantity = (item) => {
    if (item.quantity === 1) {
      return cartItems;
    }
    const Decreased = cartItems.map((product) => {
      return product === item
        ? { ...product, quantity: (product.quantity -= 1) }
        : product;
    });
    setCartItems(Decreased);
  };

  const contextValue = {
    closeCartDropdown,
    isDrawerOpen,
    setIsDrawerOpen,
    decreaseCheckoutItemQuantity,
    increaseCheckoutItemQuantity,
    removeCheckoutItem,
    cartTotal,
    setCartItems,
    cartCount,
    addItemToCart,
    cartItems,
    isCartOpen,
    setIsCartOpen,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
