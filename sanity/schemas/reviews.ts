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
      name: "slug",
      title: "Slug",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
