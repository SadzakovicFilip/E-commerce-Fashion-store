import { createSlice } from "@reduxjs/toolkit";

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

const decreaseCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem === existingCartItem
        ? { ...cartItem, quantity: (cartItem.quantity -= 1) }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    closeCartDropdown: (state, action) => {
      state.isCartOpen = false;
    },
    toggleCartDropdown: (state, action) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (products) => products.id !== action.payload.id
      );
    },
    increaseCartItemQuantity: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    decreaseCartItemQuantity: (state, action) => {
      state.cartItems = decreaseCartItem(state.cartItems, action.payload);
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const {
  clearCart,
  closeCartDropdown,
  toggleCartDropdown,
  addItemToCart,
  removeItemFromCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
