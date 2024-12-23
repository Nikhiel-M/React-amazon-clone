import React from "react";
import "./Home.css";
import Products from "../Products/Products";

const Home = () => {

  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image"src="https://m.media-amazon.com/images/I/915MJ39zjQL._SR3000,600_.png"  alt="sales" />

        <Products />
      </div>
    </div>
  );
};

export default Home;
