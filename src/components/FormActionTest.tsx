"use client";
import { yourActionName } from "@/app/actions/serverAction";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Toaster, toast } from "sonner";
import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import type { ZodError } from "zod";

const FormActionTest = () => {
  const [state, action] = useFormState(yourActionName, null);
  const formRef = useRef<HTMLFormElement>(null);
  // useEffect(() => {
  //   if (state?.code === 200) {
  //     toast.success(state?.error);
  //   }
  //   if (state?.code === 403) {
  //     toast.error(state?.error);
  //   }
  // }, [state]);
  return (
    <>
      {/* <Toaster richColors /> */}
      <form action={action} className="w-[500px] space-y-5" ref={formRef}>
        <Input type="text" name="name" placeholder="123" />
        <Input type="password" name="password" placeholder="••••••••" />
        <Button type="submit">Signup</Button>
        {state?.error && (
          <p className="text-destructive whitespace-pre-line">{state?.error}</p>
        )}
      </form>
    </>
  );
};

export default FormActionTest;
