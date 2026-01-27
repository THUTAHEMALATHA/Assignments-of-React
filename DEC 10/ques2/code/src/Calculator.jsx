import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [op, setOp] = useState("+");
  const [result, setResult] = useState("");

  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }

    let res = 0;
    if (op === "+") res = a + b;
    else if (op === "-") res = a - b;
    else if (op === "*") res = a * b;
    else if (op === "/") res = b !== 0 ? a / b : "Cannot divide by 0";

    setResult(res);
  };

  return (
    <div>
      <h2>Simple Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />

      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option value="+">Add</option>
        <option value="-">Subtract</option>
        <option value="*">Multiply</option>
        <option value="/">Divide</option>
      </select>

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />

      <button onClick={calculate}>Calculate</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;
