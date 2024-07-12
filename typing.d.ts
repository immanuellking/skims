import { Image } from "sanity";

type SanityBase = {
  _createdAt: string;
  id: string;
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

interface ReviewPosts extends SanityBase {
  _type: "reviews";
  customer_name: string;
  slug: string;
  type: string;
  comment: string;
  image: Image;
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
};

type StateType = {
  cart: CartType[];
};

type ActionType = { type: "ADD_ITEM_TO_CART"; payload: CartType };
