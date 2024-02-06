import React from "react";

function Number({ value, onNumberClick }) {
  return (
    <div className="key-box" onClick={onNumberClick}>
      {value}
    </div>
  );
}

export default Number;
