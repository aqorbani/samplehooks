import React, { useRef, useState } from "react";

const UseRef3 = () => {
  const total = useRef<number>(0);
  const [count, setCount] = useState<number>(0);

  const calculate = () => {
    total.current += count;
    return total.current;
  };

  return (
    <div>
      <p>total: {calculate()}</p>
      <p>current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseRef3;
