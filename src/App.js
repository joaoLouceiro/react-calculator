import { useState } from "react";
import Display from "./components/Display";
import NumberPad from "./components/NumberPad";
import Operation from "./components/Operation";

export default function Calculator() {
  const [numArr, setNumArr] = useState([0]);
  const [operation, setOperation] = useState({
    nArr: [],
    func: 0,
  });

  function handleNumberClick(num) {
    setNumArr(num);
  }

  function handleOp(fnOperation) {
    operation.nArr.unshift(+numArr.join(""));
    operation.func = fnOperation;
    setNumArr([0]);
  }

  function handleEquals() {
    console.log(operation, typeof operation.func);
    operation.nArr.unshift(+numArr.join(""));

    if (typeof operation.func == "function") {
      let result = operation.func(operation.nArr[0], operation.nArr[1]);

      setNumArr(result);
    }
  }

  function add(num1, num2) {
    return num1 + num2;
  }

  return (
    <main className="calculator">
      <Display value={numArr.slice(-10)} />
      <div>
        <NumberPad
          clickedNumbers={numArr}
          onNumberPadClick={handleNumberClick}
        />
        <Operation value={"+"} onClickOperation={() => handleOp(add)} />
        <Operation value={"="} onClickOperation={() => handleEquals()} />
      </div>
    </main>
  );
}
