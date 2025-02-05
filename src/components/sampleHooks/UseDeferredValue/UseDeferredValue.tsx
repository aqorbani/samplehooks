"use client";
import React, { useDeferredValue, useState } from "react";
import SlowList from "./SlowList";

const UseDeferredValue = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-gray-200 outline-none"
      />
      <SlowList text={deferredText} />
    </>
  );
};

export default UseDeferredValue;
