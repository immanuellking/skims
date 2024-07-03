import { type SchemaTypeDefinition } from "sanity";
import justIn from "./schemas/just-in";
import trending from "./schemas/trending";
import fits from "./schemas/fits";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [justIn, trending, fits],
};
