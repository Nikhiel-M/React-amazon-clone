import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ShoppingState } from "./components/Shopping/ShoppingState";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
      <ShoppingState>
        <App />
      </ShoppingState>
  </BrowserRouter>
);

reportWebVitals();
