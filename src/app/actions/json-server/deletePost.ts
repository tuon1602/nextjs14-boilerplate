"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const deletePost = async (id: number) => {
  const res = await fetch(`http://localhost:8080/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!res.ok) {
    return {
      status: 404,
      statusText: "Error delete post",
    };
  }
  revalidatePath("/");
  return {
    status: 201,
    statusText: "Deleted post",
  };
  //   revalidateTag("posts")
};
