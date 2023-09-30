import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);
  const handleClick = () => {
    setIsCartOpen((prev) => !prev);
  };
  const quantity = cartItems.map((item) => item.quantity);
  const total = quantity.reduce((acu, curr) => acu + curr, 0);

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{total}</span>
    </div>
  );
};

export default CartIcon;
