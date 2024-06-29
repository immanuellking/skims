import { client } from "@/sanity/lib/client";
import { JustIn } from "@/typing";
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
    throw new Error("Failed to fetch Just in Products");
  }
};
