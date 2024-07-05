import { client } from "@/sanity/lib/client";
import { JustIn, ReviewPosts } from "@/typing";
import { groq } from "next-sanity";
import { unstable_noStore as noStore } from "next/cache";

export const fetchProducts = async (type: string) => {
  noStore();

  const query = groq`*[_type == "${type}"]`;

  try {
    const justInProducts: JustIn[] = await client.fetch(query);

    return justInProducts;
  } catch (error) {
    console.log("DB Error", error);
    throw new Error("Failed to fetch Products");
  }
};

export const fetchReviews = async () => {
  noStore();

  const query = groq`*[_type == "reviews"]`;

  try {
    const posts: ReviewPosts[] = await client.fetch(query);
    return posts;
  } catch (error) {
    console.log("DB Error", error);
    throw new Error("Failed to fetch Reviews");
  }
};
