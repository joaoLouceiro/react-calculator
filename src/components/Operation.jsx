import React from "react";

function Operation({ value, onClickOperation }) {
  return (
    <div className="key-box" onClick={onClickOperation}>
      {value}
    </div>
  );
}

export default Operation;
