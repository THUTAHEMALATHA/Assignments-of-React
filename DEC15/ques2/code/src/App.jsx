import React from "react";

function Component6({ e }) {
  return (
    <div>
      <h4>This is prop e: {e}</h4>
    </div>
  );
}

function Component5({ e, f }) {
  return (
    <div>
      <h4>This is prop f: {f}</h4>
      {/* Component5 does not use e, only passes it */}
      <Component6 e={e} />
    </div>
  );
}

function Component4({ c, d, e, f }) {
  return (
    <div>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Component5 e={e} f={f} />
    </div>
  );
}

function Component3({ a, b, c, d, e, f }) {
  return (
    <div>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Component4 c={c} d={d} e={e} f={f} />
    </div>
  );
}

function Component2({ a, b, c, d, e, f }) {
  // Component2 only forwards props, does not use them
  return (
    <div>
      <h3>Component2 (no props used)</h3>
      <Component3 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}

function Component1({ a, b, c, d, e, f }) {
  return (
    <div>
      <h3>Component1</h3>
      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}

function App() {
  const a = "apple";
  const b = "banana";
  const c = "cherry";
  const d = "date";
  const e = "elderberry";
  const f = "fig";

  return (
    <div>
      <h1>Props Drilling Demo</h1>
      <Component1 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}

export default App;
