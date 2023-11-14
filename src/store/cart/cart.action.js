import CART_REDUCER_TYPES from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

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

export const closeCartDropdown = () =>
  createAction(CART_REDUCER_TYPES.CLOSE_CART, false);

export const toggleCartDropdown = (isCartOpen) =>
  createAction(CART_REDUCER_TYPES.TOGGLE_CART, !isCartOpen);

export const addItemToCart = (cartItems, productToAdd) =>
  createAction(
    CART_REDUCER_TYPES.CHANGING_CART_ITEMS_IN_CART,
    addCartItem(cartItems, productToAdd)
  );

export const removeItemFromCart = (cartItems, item) => {
  const filteredItems = cartItems.filter((products) => products.id !== item.id);
  return createAction(
    CART_REDUCER_TYPES.CHANGING_CART_ITEMS_IN_CART,
    filteredItems
  );
};

export const increaseCartItemQuantity = (cartItems, item) => {
  const Increased = cartItems.map((product) => {
    return product === item
      ? { ...product, quantity: (product.quantity += 1) }
      : product;
  });
  return createAction(
    CART_REDUCER_TYPES.CHANGING_CART_ITEMS_IN_CART,
    Increased
  );
};

export const decreaseCartItemQuantity = (cartItems, item) => {
  if (item.quantity === 1) {
    return removeItemFromCart(cartItems, item);
  }
  const Decreased = cartItems.map((product) => {
    return product === item
      ? { ...product, quantity: (product.quantity -= 1) }
      : product;
  });
  return createAction(
    CART_REDUCER_TYPES.CHANGING_CART_ITEMS_IN_CART,
    Decreased
  );
};
