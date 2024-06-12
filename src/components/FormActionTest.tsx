"use client";
import { yourActionName } from "@/app/actions/serverAction";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import React, { useRef } from "react";

const FormActionTest = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const {result,execute,reset,status} = useAction(yourActionName,{
    onSuccess: (data) => {
      if(data?.error) console.log(data?.error)
      if(data?.sucess) console.log(data?.sucess)

    },
    onError: (data) => {
      console.log(data?.validationErrors,data?.fetchError,data?.serverError)
    },
    onSettled: () => {
      toast.error("Error")
    },
  })

  return (
    <>
      <form action={yourActionName} className="w-[500px] space-y-5" ref={formRef}>
        <Input type="text" name="username" placeholder="123" />
        <Input type="password" name="password" placeholder="••••••••" />
        <Button type="submit">Signup</Button>
      </form>
    </>
  );
};

export default FormActionTest;
