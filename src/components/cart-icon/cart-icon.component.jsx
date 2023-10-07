import React from "react";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import {
  ShoppingIcon,
  ItemCount,
  CartIconContainer,
} from "./cart-icon.styles.js";
const CartIcon = () => {
  const { toggleCartDropdown, cartState } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartState.cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
