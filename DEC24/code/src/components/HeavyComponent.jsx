import React from "react";

function HeavyComponent() {
  console.log("🔥 HeavyComponent rendered");

  return (
    <div style={{ padding: "20px", background: "#f2f2f2" }}>
      <h3>Heavy UI Component</h3>
      <p>This simulates an expensive UI section.</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
