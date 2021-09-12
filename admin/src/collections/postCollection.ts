import { buildCollection } from "@camberi/firecms";
import postSchema from "../schemas/postSchema";
import { Post } from "../types";

const postCollection = buildCollection<Post>({
  relativePath: "posts",
  schema: postSchema,
  name: "Posts",
});

export default postCollection;
