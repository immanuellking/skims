import { ActionType, StateType } from "@/typing";

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      console.log("cart adding working");

      return { ...state, cart: [action.payload, ...state.cart] };
  }
};
