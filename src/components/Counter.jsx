import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function plus() {
    setCount(count+1);
  }
  function minus() {
    setCount(count-1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default Counter;
