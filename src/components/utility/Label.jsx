import React from "react";

const Label = ({ className = "", label = "" }) => {
  return (
    <div
      className={`capitalize  text-sm text-gray-600 h-fit font-semibold ${className}`}
    >
      {label}
    </div>
  );
};

export default Label;
