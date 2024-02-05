import React from "react";

function Number({ value, onNumberClick }) {
  return (
    <div className="number-box" onClick={onNumberClick}>
      {value}
    </div>
  );
}

export default Number;
