import React from "react";
import "../Products/products.css";
import Product from "./product";

const Products = () => {
  return (
    <>
    <div className="product-row">
      <Product
        id="1"
        title="TOXIYA Dual Monitor Stand, Adjustable Dual Monitor Desk Mount for 13-32 Inch Screens, Full Motion VESA Mount with C Clamp, Grommet Base, Tilt, Swivel, Rotation (Dual Arm)"
        image="https://m.media-amazon.com/images/I/61VI7kwqxdL._AC._SR360,460.jpg"
        rating={5}
        price={49.99} 
      />

<Product
        id="2"
        title="Samsung Galaxy A15 4GB Ram 128GB Dual Sim Smartphone, Black"
        image="https://m.media-amazon.com/images/I/517clbYccvL._AC_SX300_SY300_.jpg"
        rating={4}
        price={49.99} 
      />
    </div>

    <div className="product-row">
    <Product
    
        id="3"
        title="TOXIYA Dual Monitor Stand, Adjustable Dual..."
        image="https://m.media-amazon.com/images/I/71b-iGFMcUL._AC_SX300_SY300_.jpg"
        rating={5}
        price={49.99} 
      />
      <Product
        id="4"
        title="TOXIYA Dual Monitor Stand, Adjustable Dual..."
        image="https://m.media-amazon.com/images/I/414FKOERMnL._AC_SX300_SY300_.jpg "
        rating={5}
        price={49.99} 
      />
      <Product
        id="5"
        title="TOXIYA Dual Monitor Stand, Adjustable Dual..."
        image="https://m.media-amazon.com/images/I/51SHTcv8UIL._AC_SY300_SX300_.jpg"
        rating={5}
        price={49.99} 
      />
    </div>

    <div className="product-row">
    <Product
        id="6"
        title="TOXIYA Dual Monitor Stand, Adjustable Dual..."
        image="https://m.media-amazon.com/images/I/61oz4Rp1sJL._AC_SX522_.jpg"
        rating={5}
        price={49.99} 
      />
      <Product
        id="7"
        title="TOXIYA Dual Monitor Stand, Adjustable Dual..."
        image= "https://m.media-amazon.com/images/I/71Rt-A-8K8L._AC_SY300_SX300_.jpg"
        rating={5}
        price={49.99} 
      />
      <Product
        id="8"
        title="TOXIYA Dual Monitor Stand, Adjustable Dual..."
        image="https://m.media-amazon.com/images/I/61f9vosPb3L._AC_SX522_.jpg"
        rating={5}
        price={49.99} 
      />
    </div>
    </> ); 
};

export default Products;
