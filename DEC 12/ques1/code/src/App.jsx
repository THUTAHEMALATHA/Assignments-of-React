import React, { useState } from "react";

function ComponentA() {
  return <h2>Status is TRUE</h2>;
}

function ComponentB() {
  return <h2>Status is FALSE</h2>;
}

function App() {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(prev => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Status</button>
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default App;
