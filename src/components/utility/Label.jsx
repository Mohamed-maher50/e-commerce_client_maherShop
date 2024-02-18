import React from "react";

const Label = ({ className = "", label = "" }) => {
  return (
    <div
      className={`capitalize  text-xl text-gray-600 h-fit font-bold ${className}`}
    >
      {label}
    </div>
  );
};

export default Label;
