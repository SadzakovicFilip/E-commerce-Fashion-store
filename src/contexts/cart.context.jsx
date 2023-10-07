import React, { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CART_REDUCER_TYPES = {
  TOGGLE_CART: "TOGGLE_CART",
  CLOSE_CART: "CLOSE_CART",
  CHANGING_CART_ITEMS_IN_CART: "CHANGING_CART_ITEMS_IN_CART",
};

const cartReducer = (currentState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_REDUCER_TYPES.TOGGLE_CART:
      return { ...currentState, isCartOpen: !currentState.isCartOpen };
    case CART_REDUCER_TYPES.CLOSE_CART:
      return { ...currentState, isCartOpen: false };
    case CART_REDUCER_TYPES.CHANGING_CART_ITEMS_IN_CART:
      return {
        ...currentState,
        cartItems: payload,
        cartCount: payload.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        ),
        cartTotal: payload.reduce((total, cartItem) => {
          return total + cartItem.quantity * cartItem.price;
        }, 0),
      };
    default:
      throw new Error(`Type not recognized`);
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const closeCartDropdown = () => {
    dispatch({ type: CART_REDUCER_TYPES.CLOSE_CART });
  };

  const toggleCartDropdown = () => {
    dispatch({ type: CART_REDUCER_TYPES.TOGGLE_CART });
  };

  const addItemToCart = (productToAdd) => {
    dispatch({
      type: CART_REDUCER_TYPES.CHANGING_CART_ITEMS_IN_CART,
      payload: addCartItem(cartState.cartItems, productToAdd),
    });
  };

  const removeItemFromCart = (item) => {
    const filteredItems = cartState.cartItems.filter(
      (products) => products.id !== item.id
    );
    dispatch({
      type: CART_REDUCER_TYPES.CHANGING_CART_ITEMS_IN_CART,
      payload: filteredItems,
    });
  };

  const increaseCartItemQuantity = (item) => {
    const Increased = cartState.cartItems.map((product) => {
      return product === item
        ? { ...product, quantity: (product.quantity += 1) }
        : product;
    });
    dispatch({
      type: CART_REDUCER_TYPES.CHANGING_CART_ITEMS_IN_CART,
      payload: Increased,
    });
  };

  const decreaseCartItemQuantity = (item) => {
    if (item.quantity === 1) {
      return cartState.cartItems;
    }
    const Decreased = cartState.cartItems.map((product) => {
      return product === item
        ? { ...product, quantity: (product.quantity -= 1) }
        : product;
    });
    dispatch({
      type: CART_REDUCER_TYPES.CHANGING_CART_ITEMS_IN_CART,
      payload: Decreased,
    });
  };

  const contextValue = {
    cartState,

    toggleCartDropdown,
    closeCartDropdown,

    addItemToCart,
    removeItemFromCart,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
