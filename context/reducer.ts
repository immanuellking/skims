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
  }
};
