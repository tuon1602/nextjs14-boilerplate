//this is just an example of using next-safe-actionw with zod
"use server";
import { z } from "zod";
import { action } from "@/lib/safe-action";
import { zfd } from "zod-form-data";
import { actionSchema } from "../schema";
export const yourActionName = (prevState: any, formData: FormData) => {
  const validation = actionSchema.safeParse({
    name: formData.get("name"),
    password: formData.get("password"),
  });
  if (validation.success) {
    console.log(validation.data)
    //interacting with db
    return {
      code:200,
      error: "Validation successful!",
    };
  } else {
    const beautyError = validation.error.issues.map((err) => err.message).join(`\n`)
    return {
      code:403,
      error: beautyError
    };
  }
};
