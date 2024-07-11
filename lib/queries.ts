import Products from "@/components/ui/products/products";
import { client } from "@/sanity/lib/client";
import { JustIn, ReviewPosts } from "@/typing";
import { error } from "console";
import { groq } from "next-sanity";
import { unstable_noStore as noStore } from "next/cache";

export const fetchProducts = async (type: string) => {
  noStore();

  const query = groq`*[_type == "${type}"]`;

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

  const query = groq`*[_type == "reviews"]`;

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
  const query = groq`*[_type == "${type}" && slug == "${slug}"]`;
  // await new Promise((resolve) => setTimeout(resolve, 6000));

  try {
    const item: JustIn[] = await client.fetch(query);

    return item[0];
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error fetching Product from DB");
  }
};
