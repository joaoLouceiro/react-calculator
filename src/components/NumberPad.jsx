import React, { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";

function NumberPad({ clickedNumbers, onNumberPadClick, handleEquals }) {
  function handleClick(n) {
    const next = clickedNumbers.slice();
    if (next[0] === 0) next.shift();
    next.push(n);
    onNumberPadClick(next);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <Number value="1" onNumberClick={() => handleClick(1)} />
        <Number value="2" onNumberClick={() => handleClick(2)} />
        <Number value="3" onNumberClick={() => handleClick(3)} />
      </div>
      <div style={{ display: "flex" }}>
        <Number value="4" onNumberClick={() => handleClick(4)} />
        <Number value="5" onNumberClick={() => handleClick(5)} />
        <Number value="6" onNumberClick={() => handleClick(6)} />
      </div>
      <div style={{ display: "flex" }}>
        <Number value="7" onNumberClick={() => handleClick(7)} />
        <Number value="8" onNumberClick={() => handleClick(8)} />
        <Number value="9" onNumberClick={() => handleClick(9)} />
      </div>
      <div style={{ display: "flex" }}>
        <Number value="." onNumberClick={() => handleClick(".")} />
        <Number value="0" onNumberClick={() => handleClick(0)} />
        <Operation value={"="} onClickOperation={() => handleEquals()} />
      </div>
    </>
  );
}

export default NumberPad;
