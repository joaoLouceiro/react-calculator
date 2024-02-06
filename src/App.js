import { useState } from "react";
import Display from "./components/Display";
import NumberPad from "./components/NumberPad";
import Operation from "./components/Operation";

export default function Calculator() {
  const [display, setDisplay] = useState(0);
  const [numArr, setNumArr] = useState([0]);
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

  function handleNumberClick(num) {
    const next = { ...main };
    next.b = num;
    console.log(next);
    setDisplay(num);
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
        <div style={{ marginRight: "0.3rem" }}>
          <NumberPad
            clickedNumbers={main.b}
            onNumberPadClick={handleNumberClick}
            handleEquals={handleEquals}
          />
        </div>
        <div>
          <Operation value={"+"} onClickOperation={() => handleOp(add)} />
          <Operation value={"-"} onClickOperation={() => handleOp(sub)} />
          <Operation value={"x"} onClickOperation={() => handleOp(mult)} />
          <Operation value={"/"} onClickOperation={() => handleOp(divide)} />
        </div>
      </div>
    </main>
  );
}
