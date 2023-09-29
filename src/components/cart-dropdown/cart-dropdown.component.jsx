import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
const CartDropdown = () => {
  const { data } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {data.map((product, key) => (
          <span key={key}>
            {key}.{product.name}
          </span>
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
