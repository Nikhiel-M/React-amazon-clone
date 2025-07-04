import React, { useContext, useState, useEffect } from "react";
import axios from "../axios";
import { Link, useHistory } from "react-router-dom";
import ShoppingContext from "./Shopping/ShoppingContext";
import { CheckoutProduct } from "./Checkout/CheckoutProduct";
import { NumericFormat } from "react-number-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Payment.css";
import { db } from "../Firebase";

const Payment = () => {
  const shoppingContextValue = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shoppingContextValue;
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket, getBasketTotal]);

  // console.log("The secret is:", clientSecret);

const handleSubmit = async (e) => {
  e.preventDefault();
  setProcessing(true);

  if (!stripe || !elements) {
    setProcessing(false);
    setError("Stripe has not loaded yet.");
    return;
  }

  const payload = await stripe.confirmCardPayment(clientSecret, {
    payment_method: { card: elements.getElement(CardElement) },
  });

  if (payload.error) {
    setError(payload.error.message);
    setProcessing(false);
  } else {
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(payload.paymentIntent.id)
      .set({
        basket: basket,
        amount: payload.paymentIntent.amount,
        created: payload.paymentIntent.created,
      });
    setSucceeded(true);
    setError(null);
    setProcessing(false);
    emptyBasket();
    history.push("/orders");
  }
};

  const handleChange = (e) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} Items</Link>
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 ReactJS Road</p>
            <p> Cape Town, SA</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Reviews items and delivery</h3>
          </div>
        </div>
        <div className="payment-items">
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="payment-section">
        <div className="payment-title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment-details">
          {/* stripe code  */}
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment_price_container">
              <NumericFormat
                value={getBasketTotal(basket)}
                displayType="text"
                thousandSeparator={true}
                decimalScale={2}
                prefix="$"
                renderText={(value) => <h3>Order Total: {value}</h3>}
              />
              <button disabled={processing || disabled || succeeded}>
                {/* // className="payment-button" type="submit" onClick={handleSubmit} */}
                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
