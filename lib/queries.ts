import Products from "@/components/ui/products/products";
import { client } from "@/sanity/lib/client";
import { AllProducts, JustIn, ProductDetailsType, ReviewPosts } from "@/typing";
import { error } from "console";
import { groq } from "next-sanity";
import { unstable_noStore as noStore } from "next/cache";

export const fetchAllProducts = async (filter?: string) => {
  noStore();

  const query = groq`${filter}`;

  try {
    const justInProducts: AllProducts[] = await client.fetch(query);

    return {
      products: justInProducts,
      error: false,
    };
  } catch (error) {
    console.log("DB Error", error);
    return {
      error: true,
      products: [],
    };
  }
};

export const fetchProducts = async (type?: string) => {
  noStore();

  const query = groq`*[_type == "${type}"] {
  _id, 
  _type, 
  tag, 
  name, 
  slug, 
  price, 
  status, 
  "image": images[0]
  }`;

  try {
    const justInProducts: JustIn[] = await client.fetch(query);

    return {
      products: justInProducts,
      error: false,
    };
  } catch (error) {
    console.log("DB Error", error);
    return {
      error: true,
      products: [],
    };
  }
};

export const fetchReviews = async () => {
  noStore();

  const query = groq`*[_type == "reviews"] {
    customer_name,
    comment,
    product->{
      _type,
      slug,
      _id,
      "image": images[1]
    },
  }`;

  try {
    const posts: ReviewPosts[] = await client.fetch(query);
    return {
      posts: posts,
      error: false,
    };
  } catch (error) {
    console.log("DB Error", error);
    return {
      error: true,
      posts: [],
    };
  }
};

export const getProduct = async (type: string, slug: string) => {
  const query = groq`*[_type == "${type}" && slug == "${slug}"] {
  _id, 
  _type, 
  tag, 
  name, 
  slug, 
  price, 
  size, 
  colors,
  status, 
  images,
  }`;
  // await new Promise((resolve) => setTimeout(resolve, 6000));

  try {
    const item: ProductDetailsType[] = await client.fetch(query);

    return item[0];
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error fetching Product from DB");
  }
};
