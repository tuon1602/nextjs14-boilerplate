//this is just an example of using next-safe-actionw with zod
"use server";
import { z } from "zod";
import { action } from "@/lib/safe-action";
import { zfd } from "zod-form-data";
const schema = zfd.formData({
  username: zfd.text(z.string().min(3)),
  password: zfd.text(z.string().min(10).max(100)),
});

export const yourActionName = action(schema, async ({ username, password }) => {
  if (!username || !password) {
    return {
      error: "Please fill username or password",
    };
  }
  console.log("action fire!", username, password);
  return {
    sucess: { username, password },
  };
});
