"use client";
import React, { useId } from "react";

const UseId = () => {
  const list: Array<number> = [1, 2, 3, 4, 5, 6];
  const id = useId();
  return (
    <div>
      data:
      <div>
        {list.map((item) => {
          const id = useId();
          return <p key={id}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default UseId;
