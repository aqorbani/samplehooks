import React, { useLayoutEffect, useState } from "react";

const UseLayoutEffect: React.FC = () => {
  const [value, setValue] = useState<string>("befor");

  useLayoutEffect(() => {
    console.log("UseLayoutEffect is called with the value of ", value);
  }, [value]);

  setTimeout(() => {
    setValue("after");
  }, 2000);

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
      }}
    >
      <h1 style={{ color: "green" }}>{value}</h1> this is testing for react hook
    </div>
  );
};

export default UseLayoutEffect;
