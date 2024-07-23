import { ActionType, StateType } from "@/typing";

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const itemAlreadyExist = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemAlreadyExist) {
        return state;
      }

      return { ...state, cart: [action.payload, ...state.cart] };

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

    case "DELETE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
      };

    case "OPEN_DIALOG":
      return {
        ...state,
        isDialogOpen: true,
      };
    case "CLOSE_DIALOG":
      return {
        ...state,
        isDialogOpen: false,
      };

    default:
      return state;
  }
};
