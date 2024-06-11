import React from "react";

export const Display = ({ buttonValue }) => {
  return <div className="display">{buttonValue || "0.00"}</div>;
};
