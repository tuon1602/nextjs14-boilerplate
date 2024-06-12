"use client";

import React, { useEffect, ComponentType, useState } from "react";
import { boolean } from "zod";

interface WithLoaderProps {
  [key: string]: any;
}
const withLoader = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithLoader: React.FC<P & WithLoaderProps> = (props) => {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      // Clean up the timer on component unmount
      return () => clearTimeout(timer);
    }, []);
    return (
      <>
        {loading ? <p>loading...</p> : <WrappedComponent {...(props as P)} />}
      </>
    );
  };

  return ComponentWithLoader;
};

export default withLoader;
