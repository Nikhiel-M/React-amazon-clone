import React, { useContext } from "react";
import "./product.css";
import ShoppingContext from "../Shopping/ShoppingContext";

function Product({ id, title, image, rating, price }) {
  const shoppingContextValue = useContext(ShoppingContext);
  const { addToBasket } = shoppingContextValue;

  const AddToBasketHandler = () => {
    addToBasket({ item: { id, title, image, rating, price } });
  };

  return (
    <div className="product" key={id} >
      <img src={image} alt={title} />

      <div className="product-info">
        <p>{title}</p>

        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        <p className="product-price">${price}</p>
      </div>
      
      <button className="product-button" onClick={AddToBasketHandler}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
