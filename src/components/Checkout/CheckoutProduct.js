import React, { useContext } from "react";
import ShoppingContext from "../Shopping/ShoppingContext";
import "./CheckoutProduct.css";

export const CheckoutProduct = ({ id, title, image, price, rating, hideButton,}) => {

  const shoppingContextValue = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContextValue;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };
  
  return (
    <div className="checkout_product">
      <img className="checkout-image" src={image} alt={title} />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>

        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="checkout-product-price">${price}</p>
        {!hideButton && (
          <button
            onClick={removeFromBasketHandler}
            className="checkout-product-rating-button"
          >
            {" "}
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
};
