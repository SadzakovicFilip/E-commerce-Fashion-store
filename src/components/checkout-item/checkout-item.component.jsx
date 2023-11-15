import React from "react";
import "./checkout-item.styles.js";
import {
  CheckoutItemContainer,
  Value,
  Price,
  Quantity,
  RemoveButton,
  Arrow,
  Name,
  ImageContainer,
} from "./checkout-item.styles.js";

import {
  removeItemFromCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "../../store/cart/cart.reducer.js";
import { useDispatch } from "react-redux";
const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = item;

  const handleRemove = () => dispatch(removeItemFromCart(item));
  const handleIncrease = () => dispatch(increaseCartItemQuantity(item));
  const handleDecrease = () => dispatch(decreaseCartItemQuantity(item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleDecrease}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleIncrease}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={handleRemove}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
