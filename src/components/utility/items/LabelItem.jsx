import React from "react";

const DropDownContent = ({ children, className }) => {
  return (
    <div
      className={`flex text-sm text-gray-600 gap-3 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default DropDownContent;
