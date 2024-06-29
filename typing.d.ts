import { Image } from "sanity";

type SanityBase = {
  _createdAt: string;
  id: string;
  _rev: string;
  _updatedAt: string;
};

interface JustIn extends SanityBase {
  _type: "justIn";
  tag: string;
  name: string;
  slug: string;
  price: number;
  colors: string[];
  status: string;
  size: string[];
  images: Image[];
}
