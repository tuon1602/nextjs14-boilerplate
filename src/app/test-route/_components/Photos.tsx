"use client";
import React from "react";
import useFetch from "@/hooks/useFetch";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

interface IPosts {
  id: number;
  title: string;
}

const Photos = () => {
  const queryClient = new QueryClient();

  const { data, error, isLoading } = useQuery<IPosts[]>({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => data.slice(0, 10)),
    // staleTime: 1000 * 60 * 60,
    // cacheTime: 1000 * 60 * 60,
    // refetchInterval: 1000 * 60 * 60,
    // refetchIntervalInBackground: true,
    // refetchOnWindowFocus: true,
    // refetchOnMount: true,
    // refetchOnReconnect: true,
    // refetchOnReconnectInterval: 1000 * 60 * 60,
    // refetchOnReconnectAttempts: 3,
  });
  const handleCreatePost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return res.json();
  };
  const mutation = useMutation<IPosts, Error>({
    mutationFn: handleCreatePost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <div>
      <ul className="flex flex-col gap-5 items-center">
        {data &&
          data.map((item) => (
            <li className="bg-white text-black w-fit " key={item.id}>
              {item.title}
            </li>
          ))}
        <Button onClick={()=>mutation.mutate()}>Add a post</Button>
      </ul>
    </div>
  );
};

export default Photos;
