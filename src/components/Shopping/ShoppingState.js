import { useReducer } from "react";
import ShoppingContext from "./ShoppingContext";
import { ShoppingReducer } from "./ShoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(ShoppingReducer, initialState);

  const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };
  const addToBasket = async (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  const removeFromBasket = (item) => {
    dispatch({ type: "REMOVE-FROM-BASKET", payload: item });
  };

  const setUser = (user) => {
    dispatch({type: "SET_USER", payload: user, });
  };


  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser,
        removeFromBasket,
      }}
      
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
