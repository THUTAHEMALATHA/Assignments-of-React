import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("red"); // initial: red

  const handleToggleColor = () => {
    setColor(prev => (prev === "red" ? "blue" : "red"));
  };

  return (
    <div>
      <button onClick={handleToggleColor}>Toggle Color</button>

      <div
        style={{
          width: "200px",
          height: "100px",
          marginTop: "20px",
          backgroundColor: color,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        This div changes color
      </div>
    </div>
  );
}

export default App;
