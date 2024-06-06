"use client";

import React from "react";
import { useCounterStore } from "@/providers/counter-store-provider";
import { Button } from "@/components/ui/button";

const TestZustand = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );
  return (
    <div>
      count:{count}
      <Button onClick={() => incrementCount()}>Increase</Button>
      <Button onClick={() => decrementCount()}>Decrease</Button>
    </div>
  );
};

export default TestZustand;
