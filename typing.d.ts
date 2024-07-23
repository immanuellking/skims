import { Image } from "sanity";

type SanityBase = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

interface JustIn extends SanityBase {
  _type: string;
  tag: string;
  name: string;
  slug: string;
  price: number;
  colors: string[];
  status: string;
  size: string[];
  images: Image[];
}

interface ReviewPosts {
  customer_name: string;
  comment: string;
  product: {
    _type: string;
    slug: string;
    _id: string;
    image: Image;
  };
}

type CartType = {
  id: string;
  _type: string;
  tag: string;
  name: string;
  slug: string;
  price: number;
  image: Image;
  quantity: number;
  total: number;
};

type AddressType = {
  city: string;
  houseNo: string;
  name: string;
  phoneNumber: string;
  postalCode: string;
  state: string;
  street: string;
};

type StateType = {
  cart: CartType[];
  total: number;
  addresses: AddressType[];
  isDialogOpen;
};

type ActionType =
  | { type: "ADD_ITEM_TO_CART"; payload: CartType }
  | { type: "GET_TOTAL" }
  | { type: "INCREASE_ITEM"; payload: string }
  | { type: "DECREASE_ITEM"; payload: string }
  | { type: "DELETE_ITEM"; payload: string }
  | { type: "ADD_ADDRESS"; payload: AddressType }
  | { type: "OPEN_DIALOG" }
  | { type: "CLOSE_DIALOG" };
