import React, { useContext } from "react";
import { NumericFormat } from "react-number-format"; // <-- use NumericFormat
import { useHistory } from "react-router-dom";
import "./Subtotal.css";
import ShoppingContext from "../Shopping/ShoppingContext";

const Subtotal = () => {
  const history = useHistory();
  const shoppingContextValue = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContextValue;
  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        decimalScale={2}
        prefix="$"
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong className="total-value">{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;