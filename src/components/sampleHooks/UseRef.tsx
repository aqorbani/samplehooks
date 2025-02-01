"use client";
import React, { useEffect, useRef } from "react";

const UseRef: React.FC = () => {
  // const myRef = useRef(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} className="bg-gray-100 border-none outline-none" />;
};

export default UseRef;
