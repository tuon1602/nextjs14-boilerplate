"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { styles } from "@/app/theme/common";
import SignInButton from "@/components/SignInButton";

const LoginForm = () => {
  return (
    <>
      {" "}
      <div className="heading container">LoginForm</div>
      <SignInButton />
    </>
  );
};

export default LoginForm;
