"use client";
import React, { useRef } from "react";
import Input from "./Input";

const UseImperativeHandle = () => {
  const ref = useRef<HTMLInputElement | any>(null);

  function handleClick() {
    if (ref.current !== null) {
      ref.current.focus_method();
    }
  }
  return (
    <form>
      <Input
        placeholder="Enter your name"
        ref={ref}
        className="bg-gray-200 outline-none"
      />
      {/* <input type="text" ref={ref} className="bg-gray-200 outline-none" /> */}
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
};

export default UseImperativeHandle;
