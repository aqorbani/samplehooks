import React, { useCallback, useState } from "react";

const UseCallBack = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // only re-create the handleClick function if count changes

  console.log("main");

  return <ChildComponent onClick={handleClick} />;
};

export default UseCallBack;

function ChildComponent({ onClick }: { onClick: () => void }) {
  console.log("child");
  return <button onClick={onClick}>Click me</button>;
}
