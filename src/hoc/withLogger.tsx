"use client"

import React,{useEffect,ComponentType} from "react";

interface WithLoggerProps {
    [key: string]: any;
}
  const withLogger = <P extends object>(WrappedComponent: ComponentType<P>) => {
    const ComponentWithLogger: React.FC<P & WithLoggerProps> = (props) => {
      useEffect(() => {
        console.log('Current props:', props);
      }, [props]);
  
      return <WrappedComponent {...props as P} />;
    };
  
    return ComponentWithLogger;
  };
  
  export default withLogger;