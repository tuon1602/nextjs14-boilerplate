import React from "react";
import { Button } from "@/components/ui/button";
import { signIn, signUp } from "@/server/auth-server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AdminPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session)
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Button onClick={signUp}>sign up</Button>
      <Button onClick={signIn}>sign in</Button>
      <p>{!session ? "Not authenticated" : session.user.name}</p>
    </div>
  );
};

export default AdminPage;
