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

type StateType = {
  cart: CartType[];
  total: number;
};

type ActionType =
  | { type: "ADD_ITEM_TO_CART"; payload: CartType }
  | { type: "GET_TOTAL" }
  | { type: "INCREASE_ITEM"; payload: string }
  | { type: "DECREASE_ITEM"; payload: string }
  | { type: "DELETE_ITEM"; payload: string };
