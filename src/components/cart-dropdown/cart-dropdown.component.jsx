import React, { useContext } from "react";
import "./cart-dropdown.styles.js";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.styles";
import { DrawerContext } from "../../contexts/drawer.context.jsx";

const CartDropdown = () => {
  const { cartState, closeCartDropdown } = useContext(CartContext);
  const { setIsDrawerOpen } = useContext(DrawerContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
    closeCartDropdown();
    setIsDrawerOpen(false);
  };

  return (
    <CartDropdownContainer onMouseLeave={closeCartDropdown}>
      <CartItemsContainer>
        {cartState.cartItems.length ? (
          cartState.cartItems.map((cartItem, key) => (
            <CartItem key={key} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
