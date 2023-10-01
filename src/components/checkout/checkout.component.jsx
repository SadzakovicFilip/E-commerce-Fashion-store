import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const header = [`product`, `description`, `quantity`, `price`, `Remove`];

  return (
    <div className="container">
      <div className="headerItems">
        <div className="header-tags">
          {header.map((title, key) => {
            return (
              <span key={key} className="individual-title">
                {title}
              </span>
            );
          })}
        </div>
      </div>
      <hr style={{ width: "90%" }} />
      <div className="item-container">
        <div>
          {cartItems.map((item, key) => {
            return (
              <div key={key}>
                <CheckoutItem item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="total-payment">
        {cartTotal === 0 ? (
          <h2>Your cart is empty</h2>
        ) : (
          <h2>TOTAL : ${cartTotal}</h2>
        )}
      </div>
      <div className="footer">
        *Please use the following test credit card for payments*
      </div>
    </div>
  );
};

export default Checkout;
