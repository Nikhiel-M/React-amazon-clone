import React, { useContext } from "react";
import ShoppingContext from "../Shopping/ShoppingContext";
import "./CheckoutProduct.css";

export const CheckoutProduct = ({
  id,
  title,
  image,
  price,
  rating,
  hideButton,
}) => {
  const { removeFromBasket } = useContext(ShoppingContext);

  const handleRemove = () => removeFromBasket({ id });

  return (
    <div className="checkout_product">
      <img className="checkout-image" src={image || ""} alt={title || "Product"} />
      <div className="checkout-product-info">
        <p>{title || "No title"}</p>
        <div className="checkout-product-rating">
          {[...Array(Math.max(0, Number(rating) || 0))].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <p>${Number(price) || 0}</p>
        {!hideButton && <button onClick={handleRemove}>Remove from basket</button>}
      </div>
    </div>
  );
};
