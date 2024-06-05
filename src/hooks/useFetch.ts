"use client";
import React, { useEffect, useState } from "react";

const useFetch = <T, >(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url,{
          next:{
            revalidate:100
          }
        });
        if (!res.ok) throw new Error(`Error fetching data`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
