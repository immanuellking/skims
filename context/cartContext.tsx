"use client";

import { ActionType, CartType, StateType } from "@/typing";
import { ReactNode, createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState: StateType = {
  cart: [],
};

const CartContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
  addItemToCart: (item: CartType) => void;
}>({ state: initialState, dispatch: () => null, addItemToCart: () => {} });

function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addItemToCart(item: CartType) {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: item });
  }

  return (
    <CartContext.Provider value={{ state, dispatch, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

export { CartProvider, useCart };
