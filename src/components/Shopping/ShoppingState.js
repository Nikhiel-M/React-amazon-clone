import React, { useReducer } from "react";
import ShoppingContext from "./ShoppingContext";
import { ShoppingReducer } from "./ShoppingReducer";

export const ShoppingState = ({ children }) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(ShoppingReducer, initialState);

  
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => amount + Number(item?.price || 0), 0);

  const addToBasket = (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: item.id,
        title: item.title || "No title",
        image: item.image || "",
        price: Number(item.price) || 0,
        rating: Number(item.rating) || 0,
      },
    });
  };

  const removeFromBasket = (item) =>
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: item.id } });

  const emptyBasket = () => dispatch({ type: "EMPTY_BASKET" });
  const setUser = (user) => dispatch({ type: "SET_USER", payload: user });

  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        dispatch,
        getBasketTotal,
        addToBasket,
        removeFromBasket,
        emptyBasket,
        setUser,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
