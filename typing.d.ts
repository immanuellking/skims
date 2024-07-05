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
