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

const CartDropdown = () => {
  const { setIsCartOpen, setIsDrawerOpen } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
    setIsCartOpen(false);
    setIsDrawerOpen(false);
  };

  return (
    <CartDropdownContainer onMouseLeave={() => setIsCartOpen(false)}>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem, key) => (
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
