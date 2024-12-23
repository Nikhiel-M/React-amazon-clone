import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import {useHistory} from "react-router-dom"
import "./Subtotal.css";
import ShoppingContext from "../Shopping/ShoppingContext";

const Subtotal = () => {
  const history = useHistory()
  const shoppingContextValue = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContextValue;
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {" "}
              Subtotal ({basket.length} items): <strong className="total-value">{value}</strong>{" "}
            </p>
            <small className="subtotal-gift">
              {" "}
              <input type="checkbox" /> This order contains a gift{" "}
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        prefix="$"
      />
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
