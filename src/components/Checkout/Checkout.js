import "./Checkout.css";
import React, { useContext } from "react";
import ShoppingContext from "../Shopping/ShoppingContext";
import { CheckoutProduct } from "./CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  const shoppingContextValue = useContext(ShoppingContext);
  const { basket, user } = shoppingContextValue;

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="test"
          className="checkout-ad"
        />

        <div>
          {" "}
          <h3>Hello, {user?.email} </h3>
          <h2 className="checkout-title">Your Shopping Basket</h2>

          {basket.map((item) => {
            return(
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          )})}
        </div>
      </div>
      <div className="checkout-right"><Subtotal /></div>
    </div>
  );
};

export default Checkout;
