import { defineField, defineType } from "sanity";

export default defineType({
  name: "reviews",
  title: "Reviews",
  type: "document",
  fields: [
    defineField({
      name: "customer_name",
      title: "Customer Name",
      type: "string",
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "string",
    }),
    defineField({
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "justIn" }, { type: "trending" }],
    }),
  ],
});
