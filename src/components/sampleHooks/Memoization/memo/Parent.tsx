"use client";
import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("parent rendered");
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>Parent</p>
      <p>{counter}</p>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
      <Child number={number} />
    </div>
  );
};

export default Parent;
