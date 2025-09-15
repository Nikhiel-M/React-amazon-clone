import React, { useContext } from "react";
import ShoppingContext from "../Shopping/ShoppingContext";
import { CheckoutProduct } from "./CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

const Checkout = () => {
  const { basket = [], user = null } = useContext(ShoppingContext);

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        <div>
          <h3>Hello, {user?.email || "Guest"}</h3>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {basket.length > 0 ? (
            basket.slice(0, 20).map((item, index) => (
              <CheckoutProduct
                key={item?.id || index}
                id={item?.id}
                title={item?.title}
                image={item?.image}
                price={item?.price}
                rating={item?.rating}
              />
            ))
          ) : (
            <p>Your basket is empty</p>
          )}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
