
import React from "react";
import { signOutAction } from "@/app/actions/logoutAction";
import { Button } from "./ui/button";
import { auth } from "@/auth";

const SignOutButton = async () => {
  const session =  await auth();
  return (
    <>
      {" "}
      {session ? (
        <form action={signOutAction}>
          <Button type="submit" variant="destructive">
            Sign out
          </Button>
        </form>
      ) : null}
    </>
  );
};

export default SignOutButton;
