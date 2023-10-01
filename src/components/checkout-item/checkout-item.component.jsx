import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const {
    removeCheckoutItem,
    increaseCheckoutItemQuantity,
    decreaseCheckoutItemQuantity,
  } = useContext(CartContext);

  const handleRemove = () => removeCheckoutItem(item);
  const handleIncrease = () => increaseCheckoutItemQuantity(item);
  const handleDecrease = () => decreaseCheckoutItemQuantity(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrease}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncrease}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={handleRemove}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
