import CART_REDUCER_TYPES from "./cart.types";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_REDUCER_TYPES.TOGGLE_CART:
      return { ...state, isCartOpen: payload };
    case CART_REDUCER_TYPES.CLOSE_CART:
      return { ...state, isCartOpen: payload };
    case CART_REDUCER_TYPES.CHANGING_CART_ITEMS_IN_CART:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
