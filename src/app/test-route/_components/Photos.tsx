"use client";
import React from "react";
import useFetch from "@/hooks/useFetch";

interface IPosts {
  id: number;
  title: string;
}

const Photos = () => {
  const { data, error, isLoading } = useFetch<IPosts[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
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
            <li className="bg-red-200 w-fit " key={item.id}>
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Photos;
