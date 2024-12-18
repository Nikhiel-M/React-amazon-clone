import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect,
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


const App = () => {
  const shoppingContext = useContext(ShoppingContext)
  const { setUser } = shoppingContext

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser)
    
      if(authUser) {
        setUser(authUser)
      }else {
        setUser(null)
      }
    })
  }, [])

  return (
    <Router>
      <>
        <Header />

        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            
            <Route path='/checkout'>
              <Checkout/>
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
