import { useState } from "react";
import Display from "./components/Display";
import Operation from "./components/Operation";
import Number from "./components/Number";

export default function Calculator() {
  const [display, setDisplay] = useState(0);
  const [main, setMain] = useState({
    a: [0],
    b: [0],
    func: add,
  });

  function divide(num1, num2) {
    return num1 / num2;
  }

  function add(num1, num2) {
    return num1 + num2;
  }

  function sub(num1, num2) {
    return num1 - num2;
  }

  function mult(num1, num2) {
    return num1 * num2;
  }

  function handleClick(num) {
    const next = { ...main };
    if (next.b[0] === 0) next.b.shift();
    next.b.push(num);
    console.log(next);
    setDisplay(next.b);
    setMain(next);
  }

  function handleOp(fnOp) {
    const res = main.func(+main.a.join(""), +main.b.join("") || +display);
    const next = {
      a: [res],
      b: [0],
      func: fnOp,
    };
    console.log(next);
    setDisplay(res);
    setMain(next);
  }

  function handleEquals() {
    const res = main.func(+main.a.join(""), +main.b.join(""));
    const next = {
      a: [0],
      b: [0],
      func: add,
    };
    console.log(next);
    setDisplay(res);
    setMain(next);
  }

  return (
    <main className="calculator">
      <Display value={display} />
      <div style={{ display: "flex" }}>
        <Number value="1" onNumberClick={() => handleClick(1)} />
        <Number value="2" onNumberClick={() => handleClick(2)} />
        <Number value="3" onNumberClick={() => handleClick(3)} />
        <Operation value={"+"} onClickOperation={() => handleOp(add)} />
      </div>
      <div style={{ display: "flex" }}>
        <Number value="4" onNumberClick={() => handleClick(4)} />
        <Number value="5" onNumberClick={() => handleClick(5)} />
        <Number value="6" onNumberClick={() => handleClick(6)} />
        <Operation value={"-"} onClickOperation={() => handleOp(sub)} />
      </div>
      <div style={{ display: "flex" }}>
        <Number value="7" onNumberClick={() => handleClick(7)} />
        <Number value="8" onNumberClick={() => handleClick(8)} />
        <Number value="9" onNumberClick={() => handleClick(9)} />
        <Operation value={"x"} onClickOperation={() => handleOp(mult)} />
      </div>
      <div style={{ display: "flex" }}>
        <Number value="." onNumberClick={() => handleClick(".")} />
        <Number value="0" onNumberClick={() => handleClick(0)} />
        <Operation value={"="} onClickOperation={() => handleEquals()} />
        <Operation value={"/"} onClickOperation={() => handleOp(divide)} />
      </div>
    </main>
  );
}
