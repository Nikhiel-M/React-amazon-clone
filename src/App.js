import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import { Header } from "./components/layout/Header/Header";
// import ProductsDetails from "./components/Products/ProductsDetails";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import { useContext, useEffect } from "react";
import { auth } from "./Firebase";
import ShoppingContext from "./components/Shopping/ShoppingContext";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51QYP2IL8UBTHhdB9rBTEMItlvUq4Y1qILpFPwaYp5hchsZF6hdNkF8k5BsTdeik3tQPpybL9O3KvjR93nZT0MnGN0065zjdFt9"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => { 
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <>
        <Header />

        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>

            <Route path="/payment">
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
 
            <Route path="/home">
              <Home />
            </Route>

            <Route exact path="/products">
              <Products />
            </Route>

            {/* <Route exact path="/products/:id">
              <ProductsDetails />
            </Route> */}

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/orders">
              <Orders />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </>
    </Router>
  );
};

export default App;

// Checkout (islogin)
