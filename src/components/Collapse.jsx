import React from "react";

const Collapse = ({ title = "", className = "", children }) => {
  return (
    <div
      tabIndex={0}
      className={`collapse rounded-md collapse-arrow border border-base-300 bg-base-200 ${className}`}
    >
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};

export default Collapse;
