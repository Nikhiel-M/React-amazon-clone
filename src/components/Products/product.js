import React, { useContext } from "react";
import ShoppingContext from "../Shopping/ShoppingContext";
import "./product.css";

function Product({ id, title, image, price, rating }) {
  const { addToBasket } = useContext(ShoppingContext);

  const handleAddToBasket = () => {
    addToBasket({
      id,
      title: title || "No title",
      image: image || "",
      price: Number(price) || 0,
      rating: Number(rating) || 0,
    });
  };

  return (
    <div className="product" key={id}>
      <img src={image || ""} alt={title || "Product"} />
      <div className="product-info">
        <p>{title || "No title"}</p>
        <div className="product-rating">
          {[...Array(Math.max(0, Number(rating) || 0))].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <p className="product-price">${Number(price) || 0}</p>
      </div>
      <button onClick={handleAddToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
