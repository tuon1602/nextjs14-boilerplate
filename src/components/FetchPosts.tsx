"use client";

import React from "react";
import { useGetPosts } from "@/hooks/query/useGetPosts";
import { Button } from "./ui/button";
interface IPosts {
  id: number;
  title: string;
  author: string;
}
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deletePost } from "@/app/actions/json-server/deletePost";
import { toast } from "sonner";

const FetchPosts = () => {
  const { data, isLoading, error } = useGetPosts();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    throw new Error(error?.message);
  }
  const handleDelete = async (id: number) => {
    const res = await deletePost(id);
    if (res.status === 201) {
      toast.success(res.statusText);
    } else {
      toast.error(res.statusText);
    }
  };
  return (
    <div>
      {data.map((post: IPosts, index: any) => (
        <div
          key={index}
          className="p-2 border-red-200 border flex justify-between gap-20"
        >
          <p>{post.title}</p>{" "}
          <AlertDialog>
            <AlertDialogTrigger className="bg-red-500 p-2">
              Delete
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDelete(post.id)}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ))}
    </div>
  );
};

export default FetchPosts;
