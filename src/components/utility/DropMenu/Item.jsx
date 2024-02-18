import React from "react";
import { cloneElement } from "react";

const Item = ({ children }) => {
  return <li className="btn">{children}</li>;
};

export default Item;
