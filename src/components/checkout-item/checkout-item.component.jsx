import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemove = (item) => {
    const filteredItems = cartItems.filter(
      (products) => products.id !== item.id
    );
    setCartItems(filteredItems);
  };

  const handleIncrease = (item) => {
    const Increased = cartItems.map((product) => {
      return product === item
        ? { ...product, quantity: (product.quantity += 1) }
        : product;
    });
    setCartItems(Increased);
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      return cartItems;
    }
    const Decreased = cartItems.map((product) => {
      return product === item
        ? { ...product, quantity: (product.quantity -= 1) }
        : product;
    });
    setCartItems(Decreased);
  };

  return (
    <div>
      <div className="item">
        <div className="singleItem">
          <div className="img">
            <img src={item.imageUrl} alt={`${item.name}`} />
          </div>
          <span>{item.name}</span>
          <span className="quantity-span">
            <button onClick={() => handleDecrease(item)}>{`<`}</button>
            {item.quantity}
            <button onClick={() => handleIncrease(item)}>{`>`}</button>
          </span>
          <span>${item.price}</span>
          <button onClick={() => handleRemove(item)}>X</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CheckoutItem;
