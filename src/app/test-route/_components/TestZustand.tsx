"use client";

import React from "react";
import { useBearStore } from "@/stores/bear-store";
import { Button } from "@/components/ui/button";

const TestZustand = () => {
  const { bears, increase, removeAllBears } = useBearStore();
  return (
    <div>
      bears:{bears}
      <Button onClick={() => increase()}>+1 bear</Button>
      <Button onClick={() => removeAllBears()}>reset bear to 0</Button>
    </div>
  );
};

export default TestZustand;
