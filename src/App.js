import { useState } from "react";
import Display from "./components/Display";
import NumberPad from "./components/NumberPad";

export default function Calculator() {
  const [numArr, setNumArr] = useState([]);

  function handleNumberClick(num) {
    setNumArr(num);
  }

  return (
    <main className="calculator">
      <Display value={numArr.slice(-10)} />
      <NumberPad clickedNumbers={numArr} onNumberPadClick={handleNumberClick} />
    </main>
  );
}
