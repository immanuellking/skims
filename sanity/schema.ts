import { type SchemaTypeDefinition } from "sanity";
import justIn from "./schemas/just-in";
import trending from "./schemas/trending";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [justIn, trending],
};
