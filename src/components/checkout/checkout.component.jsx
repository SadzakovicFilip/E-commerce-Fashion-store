import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
const Checkout = () => {
  const { cartItems, setCartItems, cartTotal } = useContext(CartContext);

  const handleClick = (item) => {
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

  const header = [`product`, `description`, `quantity`, `price`, `Remove`];
  return (
    <div className="container">
      <div className="headerItems">
        <div className="header-tags">
          {header.map((item, key) => {
            return (
              <span
                key={key}
                style={{
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item}
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
              <div>
                <div key={key} className="item">
                  <div className="singleItem">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={item.imageUrl}
                        alt={`${item.name}`}
                        width={"120px"}
                        height={`150px`}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <span
                      style={{
                        width: "150px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        width: "150px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        onClick={() => handleDecrease(item)}
                      >{`<`}</button>{" "}
                      {item.quantity}{" "}
                      <button
                        onClick={() => handleIncrease(item)}
                      >{`>`}</button>
                    </span>
                    <span
                      style={{
                        width: "150px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      ${item.price}
                    </span>
                    <button
                      style={{
                        width: "150px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => handleClick(item)}
                    >
                      X
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="total-payment"
        style={{
          width: "900px",
          display: "flex",
          justifyContent: "right",
          marginRight: "20px",
        }}
      >
        <h2>TOTAL:${cartTotal}</h2>
      </div>
      <div
        className="footer"
        style={{ display: "flex", alignItems: "bottom", color: "red" }}
      >
        *Please use the following test credit card for payments*
      </div>
    </div>
  );
};

export default Checkout;
