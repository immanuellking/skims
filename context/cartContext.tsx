"use client";

import { ActionType, AddressType, CartType, StateType } from "@/typing";
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
  addresses: [],
  dialog: {
    isOpen: false,
    status: "new",
  },
  selectedAddress: undefined,
};

const CartContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
  addItemToCart: (item: CartType) => void;
  clearCart: () => void;
  getTotal: () => void;
  increaseItem: (id: string) => void;
  decreaseItem: (id: string) => void;
  deleteItem: (id: string) => void;
  addAddress: (value: AddressType) => void;
  editAddress: (value: AddressType) => void;
  deleteAddress: (id: string) => void;
  setSelectedAddress: (id: string) => void;
  clearSelectedAddress: () => void;
  openDialog: () => void;
  closeDialog: () => void;
  setDialogStatus: (status: "edit" | "new") => void;
}>({
  state: initialState,
  dispatch: () => null,
  addItemToCart: () => {},
  clearCart: () => {},
  getTotal: () => {},
  increaseItem: () => {},
  decreaseItem: () => {},
  deleteItem: () => {},
  addAddress: () => {},
  editAddress: () => {},
  deleteAddress: () => {},
  openDialog: () => {},
  closeDialog: () => {},
  setDialogStatus: () => {},
  setSelectedAddress: () => {},
  clearSelectedAddress: () => {},
});

function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    // Check if window is defined (browser environment)
    if (typeof window !== "undefined") {
      const localData = JSON.parse(localStorage.getItem("cart") || "[]");
      const addressesLocalData = JSON.parse(
        localStorage.getItem("addresses") || "[]"
      );
      return localData || addressesLocalData
        ? {
            ...initial,
            cart: localData,
            addresses: addressesLocalData,
          }
        : initial;
    }
    return initial;
  });

  function addItemToCart(item: CartType) {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: item });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  function getTotal() {
    dispatch({ type: "GET_TOTAL" });
  }

  function increaseItem(id: string) {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  }

  function decreaseItem(id: string) {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  }

  function deleteItem(id: string) {
    dispatch({ type: "DELETE_ITEM", payload: id });
  }

  function addAddress(value: AddressType) {
    dispatch({ type: "ADD_ADDRESS", payload: value });
  }

  function editAddress(value: AddressType) {
    dispatch({ type: "EDIT_ADDRESS", payload: value });
  }

  function deleteAddress(id: string) {
    dispatch({ type: "DELETE_ADDRESS", payload: id });
  }

  function setSelectedAddress(id: string) {
    dispatch({ type: "SET_SELECTED_ADDRESS", payload: id });
  }

  function clearSelectedAddress() {
    dispatch({ type: "CLEAR_SELECTED_ADDRESS" });
  }

  function openDialog() {
    dispatch({ type: "OPEN_DIALOG" });
  }

  function closeDialog() {
    dispatch({ type: "CLOSE_DIALOG" });
  }

  function setDialogStatus(status: "edit" | "new") {
    dispatch({ type: "SET_DIALOG_STATUS", payload: status });
  }

  useEffect(() => {
    // Save state to localStorage
    if (typeof window !== "undefined") {
      // Save state to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  useEffect(() => {
    // Save state to localStorage
    if (typeof window !== "undefined") {
      // Save state to localStorage
      localStorage.setItem("addresses", JSON.stringify(state.addresses));
    }
  }, [state.addresses]);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addItemToCart,
        clearCart,
        getTotal,
        increaseItem,
        decreaseItem,
        deleteItem,
        addAddress,
        editAddress,
        deleteAddress,
        openDialog,
        closeDialog,
        setDialogStatus,
        setSelectedAddress,
        clearSelectedAddress,
      }}
    >
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
