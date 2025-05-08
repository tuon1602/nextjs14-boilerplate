"use server";

import { auth } from "@/lib/auth";

export const signIn = async () => {
  await auth.api.signInEmail({
    body:{
        email: "test@example.com",
        password: "password1234",
    }
  });
};

export const signUp = async () => {
    await auth.api.signUpEmail({
        body:{
            email: "test@example.com",
            password: "password1234",
            name:"test",
        }
      });
};
