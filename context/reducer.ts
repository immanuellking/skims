import { ActionType, StateType } from "@/typing";

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return { ...state, cart: [action.payload, ...state.cart] };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "GET_TOTAL":
      const total = state.cart.reduce((acc, item) => acc + item.total, 0);
      return { ...state, total };

    case "INCREASE_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: item.price * (item.quantity + 1),
              }
            : item
        ),
      };

    case "DECREASE_ITEM":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  total: item.price * (item.quantity - 1),
                }
              : item
          )
          .filter((item) => item.quantity !== 0),
      };

    case "DELETE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "ADD_ADDRESS":
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    case "EDIT_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
      };

    case "DELETE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
      };

    case "SET_SELECTED_ADDRESS":
      return {
        ...state,
        selectedAddress: state.addresses.find(
          (address) => address.id === action.payload
        ),
      };

    case "CLEAR_SELECTED_ADDRESS":
      return {
        ...state,
        selectedAddress: undefined,
      };

    case "OPEN_DIALOG":
      return {
        ...state,
        dialog: { ...state.dialog, isOpen: true },
      };

    case "CLOSE_DIALOG":
      return {
        ...state,
        dialog: { ...state.dialog, isOpen: false },
        selectedAddress: undefined,
      };

    case "SET_DIALOG_STATUS":
      return {
        ...state,
        dialog: { ...state.dialog, status: action.payload },
      };

    default:
      return state;
  }
};
