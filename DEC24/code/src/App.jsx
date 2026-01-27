import React, { useState, Suspense, lazy } from "react";

// ✅ Lazy loading the heavy component
const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
