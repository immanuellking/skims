"use client";

import { ActionType, CartType, StateType } from "@/typing";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { reducer } from "./reducer";

const initialState: StateType = {
  cart: [],
  total: 0,
};

const CartContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
  addItemToCart: (item: CartType) => void;
  getTotal: () => void
}>({ state: initialState, dispatch: () => null, addItemToCart: () => {}, getTotal: () => {} });

function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    // Check if window is defined (browser environment)
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("cart");
      return localData ? { cart: JSON.parse(localData), total: 0 } : initial;
    }
    return initial;
  });

  function addItemToCart(item: CartType) {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: item });
  }

  function getTotal() {
    dispatch({ type: "GET_TOTAL" });
  }

  useEffect(() => {
    // Save state to localStorage
    if (typeof window !== "undefined") {
      // Save state to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch, addItemToCart, getTotal }}>
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
