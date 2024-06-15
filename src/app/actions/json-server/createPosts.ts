"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const createPost = async (title: string, author: string) => {
  const res = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify({
      id: Math.floor(Math.random() * (10000 - 10 + 1)) + 10,
      title,
      author,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!res.ok) {
    return {
      status: 404,
      statusText: "Error creating post",
    };
  }
  revalidatePath("/");
  return {
    status: 201,
    statusText: "Created post",
  };
  //   revalidateTag("posts")
};
