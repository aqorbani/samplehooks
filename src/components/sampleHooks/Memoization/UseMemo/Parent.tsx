"use client";
import React, { useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("parent rendered");
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  const slow = useMemo(() => {
    for (let index = 0; index < 1000000000; index++) {}
    return counter;
  }, [counter]);

  return (
    <div>
      <p>Parent</p>
      <p>{slow}</p>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
      <Child number={number} />
    </div>
  );
};

export default Parent;
