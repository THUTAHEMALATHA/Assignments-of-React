import React, { createContext, useContext } from "react";

// 1) Create context
const AppContext = createContext(null);

// 2) Component6 consumes e
function Component6() {
  const { e } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop e: {e}</h4>
    </div>
  );
}

// 3) Component5 consumes f and renders Component6
function Component5() {
  const { f } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop f: {f}</h4>
      <Component6 />
    </div>
  );
}

// 4) Component4 consumes c, d
function Component4() {
  const { c, d } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Component5 />
    </div>
  );
}

// 5) Component3 consumes a, b
function Component3() {
  const { a, b } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Component4 />
    </div>
  );
}

// 6) Component2 is just a middle component, no context, no props
function Component2() {
  return (
    <div>
      <h3>Component2 (no data, no props)</h3>
      <Component3 />
    </div>
  );
}

// 7) Component1: wraps the tree with AppContext.Provider
function Component1() {
  const a = "apple";
  const b = "banana";
  const c = "cherry";
  const d = "date";
  const e = "elderberry";
  const f = "fig";

  return (
    <AppContext.Provider value={{ a, b, c, d, e, f }}>
      <div>
        <h3>Component1 (Context Provider)</h3>
        {/* No props passed here */}
        <Component2 />
      </div>
    </AppContext.Provider>
  );
}

// 8) Root App component
function App() {
  return (
    <div>
      <h1>Context API Props Drilling Solution</h1>
      <Component1 />
    </div>
  );
}

export default App;
