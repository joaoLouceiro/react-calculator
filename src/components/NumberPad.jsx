import React, { useState } from "react";
import Number from "./Number";
import Display from "./Display";

function NumberPad({ clickedNumbers, onNumberPadClick }) {
  function handleClick(n) {
    const next = clickedNumbers.slice();
    next.push(n);
    onNumberPadClick(next);
  }

  return (
    <>
      <div className="number-pad__line">
        <Number value="1" onNumberClick={() => handleClick(1)} />
        <Number value="2" onNumberClick={() => handleClick(2)} />
        <Number value="3" onNumberClick={() => handleClick(3)} />
      </div>
      <div className="number-pad__line">
        <Number value="4" onNumberClick={() => handleClick(4)} />
        <Number value="5" onNumberClick={() => handleClick(5)} />
        <Number value="6" onNumberClick={() => handleClick(6)} />
      </div>
      <div className="number-pad__line">
        <Number value="7" onNumberClick={() => handleClick(7)} />
        <Number value="8" onNumberClick={() => handleClick(8)} />
        <Number value="9" onNumberClick={() => handleClick(9)} />
      </div>
      <div className="number-pad__line">
        <Number value="0" onNumberClick={() => handleClick(0)} />
      </div>
    </>
  );
}

export default NumberPad;
