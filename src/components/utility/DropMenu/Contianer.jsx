import React from "react";
import { FaChevronDown } from "react-icons/fa";

import { FaArrowDown } from "react-icons/fa";
const Container = ({ tabIndex = 0, label, children }) => {
  return (
    <div className="dropdown">
      <div tabIndex={tabIndex} role="button" className="btn m-1 flex">
        <span>{label}</span>
        <span>
          <FaChevronDown />
        </span>
      </div>
      <ul
        tabIndex={tabIndex}
        className="dropdown-content grid gap-2 z-[20] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {children}
      </ul>
    </div>
  );
};

export default Container;
