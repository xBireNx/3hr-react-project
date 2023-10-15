import React, { createContext, useReducer } from "react";

export const cartContext = createContext();

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = {
        name: action.payload.tshirtName,
        description: action.payload.description,
        price: action.payload.price,
        large: action.payload.large,
        medium: action.payload.medium,
        small: action.payload.small,
      };
      return [...state, newItem];
      case "UPDATE_ITEMS":
        const { index, size } = action.payload;
        const updatedItems = state.items.map((item, i) => {
          if (i === index) {
            const updatedSizes = { ...item.sizes, [size]: item.sizes[size] - 1 };
            return { ...item, sizes: updatedSizes };
          }
          return item;
        });
        return { ...state, items: updatedItems, badgeCount: state.badgeCount - 1 };  

    default:
      return state;
  }
}

export function CartContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (
    tshirtName,
    description,
    price,
    large,
    medium,
    small
  ) => {
    dispatch({
      type: "ADD_ITEM",
      payload: { tshirtName, description, price, large, medium, small },
    });
  };
  const updateItemInCart = (index, size) => {
    dispatch({
      type: "UPDATE_ITEMS",
      payload: { index, size },
    });
  };

  return (
    <cartContext.Provider value={{ state, addItemToCart, updateItemInCart }}>
      {props.children}
    </cartContext.Provider>
  );
}
