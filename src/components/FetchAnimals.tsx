"use client";

import React from "react";
import { useGetAnimals } from "@/hooks/useGetAnimals";

const FetchAnimals = () => {
  const { data:animals, isLoading, error } = useGetAnimals();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error){
    throw new Error(error?.message)
  }
  return(
    <div>
        {animals?.animals?.map((animal,index)=>(
            <div key={index} className="">{animal.commonName}</div>
        ))}
    </div>
  )
};

export default FetchAnimals;
