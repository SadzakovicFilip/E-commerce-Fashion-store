import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
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

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const {
    removeItemFromCart,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
  } = useContext(CartContext);

  const handleRemove = () => removeItemFromCart(item);
  const handleIncrease = () => increaseCartItemQuantity(item);
  const handleDecrease = () => decreaseCartItemQuantity(item);

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
