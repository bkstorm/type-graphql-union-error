import { createUnionType } from "type-graphql";
import { PostComment } from "./post-comment";
import { Post } from "./post";

export const EntityUnion = createUnionType({
  name: "EntityUnion",
  types: [Post, PostComment]
});
