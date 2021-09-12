import { buildSchema } from "@camberi/firecms";

import { Post } from "../types";

const postSchema = buildSchema<Post>({
  name: "Post",
  properties: {
    title: {
      dataType: "string",
      title: "Title",
      validation: { required: true },
    },
    authors: {
      dataType: "array",
      of: { dataType: "string" },
      title: "Authors",
      validation: { min: 1 },
    },
    content: {
      dataType: "array",
      of: {
        dataType: "string",
        config: {
          storageMeta: {
            mediaType: "image",
            storagePath: "posts",
            acceptedFiles: ["image/*"],
          },
        },
      },
      title: "Content",
      validation: { min: 1 },
    },
    designers: {
      dataType: "array",
      of: { dataType: "string" },
      title: "Desginers",
      validation: { min: 1 },
    },
    date_of_publication: {
      dataType: "timestamp",
      title: "Date of publication",
      validation: { required: true },
    },
    sources: {
      dataType: "array",
      of: { dataType: "string" },
      validation: { min: 1 },
      title: "Sources",
    },
    tags: {
      dataType: "array",
      of: { dataType: "string" },
      validation: { min: 1 },
      title: "Tags",
    },
  },
});

export default postSchema;
