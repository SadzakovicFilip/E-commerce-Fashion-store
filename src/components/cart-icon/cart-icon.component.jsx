import React from "react";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import {
  ShoppingIcon,
  ItemCount,
  CartIconContainer,
} from "./cart-icon.styles.js";
const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);
  const handleClick = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
