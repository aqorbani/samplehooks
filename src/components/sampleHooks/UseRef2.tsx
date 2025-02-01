"use client";

import React, { useEffect, useRef } from "react";

function UseRef2(props: { value: number }) {
  const prevValueRef = useRef<number | undefined>(null);

  useEffect(() => {
    if (
      prevValueRef.current !== undefined &&
      prevValueRef.current !== props.value
    ) {
      console.log("Value changed:", prevValueRef.current, "->", props.value);
    }

    prevValueRef.current = props.value;
  }, [props.value]);
  return <div>{props.value}</div>;
}

export default UseRef2;
