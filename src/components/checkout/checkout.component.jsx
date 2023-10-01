import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const header = [`product`, `description`, `quantity`, `price`, `remove`];

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {header.map((title, key) => {
          return (
            <div className="header-block">
              <span key={key}>{title}</span>
            </div>
          );
        })}
      </div>
      {cartItems.map((item, key) => (
        <CheckoutItem key={key} item={item} />
      ))}
      {cartTotal === 0 ? (
        <span className="total">Your cart is empty</span>
      ) : (
        <span className="total">TOTAL : ${cartTotal}</span>
      )}
      <div className="footer">
        *Please use the following test credit card for payments*
      </div>
    </div>
  );
};

export default Checkout;
