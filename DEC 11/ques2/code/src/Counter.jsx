import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]); // runs only when count changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;

