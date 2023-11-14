import React, { useContext } from "react";
import "./cart-dropdown.styles.js";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.styles";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { closeCartDropdown } from "../../store/cart/cart.reducer.js";
import { useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { setIsDrawerOpen } from "../../store/drawer/drawer.reducer.js";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
    dispatch(closeCartDropdown());
    dispatch(setIsDrawerOpen(false));
  };
  const handleMouseLeave = () => dispatch(closeCartDropdown());

  return (
    <CartDropdownContainer onMouseLeave={handleMouseLeave}>
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
