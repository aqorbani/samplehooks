"use client";
import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("parent rendered");
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  const slow = useMemo(() => {
    for (let index = 0; index < 1000000000; index++) {}
    return counter;
  }, [counter]);

  const clickHandler = useCallback(() => {
    setNumber((number) => number + 1);
  }, [number]);
  return (
    <div>
      <p>Parent</p>
      <p>{slow}</p>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <Child number={number} clickHandler={clickHandler} />
    </div>
  );
};

export default Parent;
