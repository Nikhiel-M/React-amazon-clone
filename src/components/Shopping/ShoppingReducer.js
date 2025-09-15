export const ShoppingReducer = (state, action) => {
  // console.log("Reducer action:", action.type, action.payload);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      const newBasket = [...state.basket];
      if (index >= 0) newBasket.splice(index, 1);
      return { ...state, basket: newBasket };

    case "EMPTY_BASKET":
      return { ...state, basket: [] };

    case "SET_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

