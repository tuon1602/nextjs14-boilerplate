"use client";

import React from "react";
import withLogger from "@/hoc/withLogger";
import MyComponent from "./MyComponent";
import withLoader from "@/hoc/withLoader";

const MyComponentwithLogger = withLogger(MyComponent);
const MyComponentWithLoader = withLoader(MyComponent);

const HOCpage = () => {
  return (
    <>
      <MyComponentwithLogger age={19} name="tuaans" />
      <MyComponentWithLoader age={19} name="tuan from loader" />
    </>
  );
};

export default HOCpage;
