"use client";

import { ActionType, AddressType, CartType, StateType } from "@/typing";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import { reducer } from "./reducer";
import { toast } from "react-toastify";
import { capitalize } from "@/lib/utils";

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
    const itemExist = state.cart.find((cartItem) => cartItem.id === item.id);

    if (itemExist) {
      toast(`${capitalize(itemExist.name)} already in cart`, {
        type: "info",
      });
    } else {
      dispatch({ type: "ADD_ITEM_TO_CART", payload: item });
      toast(`${capitalize(item.name)} Added To Cart`, { type: "success" });
    }
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const getTotal = useCallback(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [dispatch, state.cart]);

  function increaseItem(id: string) {
    const itemExist = state.cart.find((cartItem) => cartItem.id === id);
    if (itemExist)
      toast(`${capitalize(itemExist.name)} Quantity Increased`, {
        type: "success",
      });
    dispatch({ type: "INCREASE_ITEM", payload: id });
  }

  function decreaseItem(id: string) {
    dispatch({ type: "DECREASE_ITEM", payload: id });
    const itemExist = state.cart.find((cartItem) => cartItem.id === id);
    if (itemExist) {
      if (itemExist.quantity === 1) {
        toast(`${capitalize(itemExist.name)} Removed From Cart`, {
          type: "error",
        });
      } else {
        toast(`${capitalize(itemExist.name)} Quantity Decreased`, {
          type: "warning",
        });
      }
    }
  }

  function deleteItem(id: string) {
    const itemExist = state.cart.find((cartItem) => cartItem.id === id);
    if (itemExist) {
      toast(`${capitalize(itemExist.name)} Removed From Cart`, {
        type: "error",
      });
    }
    dispatch({ type: "DELETE_ITEM", payload: id });
  }

  function addAddress(value: AddressType) {
    toast("Address Added Successfully", {
      type: "success",
    });
    dispatch({ type: "ADD_ADDRESS", payload: value });
  }

  function editAddress(value: AddressType) {
    toast("Address Edited Successfully", {
      type: "info",
    });
    dispatch({ type: "EDIT_ADDRESS", payload: value });
  }

  function deleteAddress(id: string) {
    toast("Address Deleted Successfully", {
      type: "error",
    });
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
