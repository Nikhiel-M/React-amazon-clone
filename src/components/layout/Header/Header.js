import React, { useContext } from "react";
import { Link} from "react-router-dom";
import "./Header.css";
import Searchbar from "../Searchbar/Searchbar";
import "material-icons/iconfont/material-icons.css";
import ShoppingContext from "../../Shopping/ShoppingContext";
import { auth } from "../../../Firebase";

export const Header = ({ onLogOut }) => {
  const shoppingContextValue = useContext(ShoppingContext);
  const { basket, user } = shoppingContextValue;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className="header">
      <nav>
        <Link to="/">
          <div className="logodiv">
            <img
              className="logo"
              alt="File:Amazon logo.svg"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            <h3>.co.za</h3>
          </div>
        </Link>

        <div className="location">
          <i className="material-icons-outlined" id="icon-pin">
            room
          </i>
          <strong>Update location</strong>
        </div>

        <Searchbar />

        {!user && (
          <Link to="/login">
            <div className="account">
              <h5>Sign In Guest</h5>
              <strong>Account</strong>
            </div>
          </Link>
        )}
        {user && (
          <div className="account" onClick={handleAuthentication}>
            <h5>Sign out User</h5>
            <strong>Account</strong>
          </div>
        )}

        <div className="returns">
          <h5>Returns</h5>
          <strong>& Orders</strong>
        </div>

        <Link to={"/checkout"}>
          <div className="basket">
            <i className="material-icons icon" id="icon-basket">
              shopping_cart
            </i>
            <strong className="basket-number">{basket?.length}</strong>
            <strong>Basket</strong>
          </div>
        </Link>
      </nav>
    </header>
  );
};
