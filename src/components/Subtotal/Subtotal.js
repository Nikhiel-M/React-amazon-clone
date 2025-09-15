import React, { useContext } from "react";
import { NumericFormat } from "react-number-format";
import { useHistory } from "react-router-dom";
import ShoppingContext from "../Shopping/ShoppingContext";
import "./Subtotal.css";

const Subtotal = () => {
  const history = useHistory();
  const { basket, getBasketTotal } = useContext(ShoppingContext);

  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator
        decimalScale={2}
        prefix="$"
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):{" "}
              <strong className="total-value">{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
