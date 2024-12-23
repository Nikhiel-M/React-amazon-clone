import React, { useContext } from "react";
import ShoppingContext from "./Shopping/ShoppingContext";
import { Link } from "react-router-dom";
import { CheckoutProduct } from "./Checkout/CheckoutProduct";
import "./Payment.css";

const Payment = () => {
  const shoppingContextValue = useContext(ShoppingContext);
  const { basket, user } = shoppingContextValue;
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} Items</Link>
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 ReactJS Road</p>
            <p> Cape Town, SA</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Reviews items and delivery</h3>
          </div>
        </div>
        <div className="payment-items">
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="payment-section">
        <div className="payment-title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment-details">{/* stripe code  */}</div>
      </div>
    </div>
  );
};

export default Payment;
