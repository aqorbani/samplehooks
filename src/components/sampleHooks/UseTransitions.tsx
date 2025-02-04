"use client";
import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [name, setName] = useState<string>("");
  const [lists, setLists] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const LIST_SIZE: number = 100000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);

    startTransition(() => {
      const dataList: string[] = [];
      for (let i: number = 0; i < LIST_SIZE; i++) {
        dataList.push(value);
      }
      setLists(dataList);
    });
  };

  console.log("rendered")

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="bg-gray-200"
      />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        lists.map((list: string, index: number) => {
          return <div key={index}>{list}</div>;
        })
      )}
    </div>
  );
};

export default UseTransition;
