import React from "react";
import Container from "./Contianer";
import Item from "./Item";

const DropMenu = ({ children }) => {
  return <>{children}</>;
};
DropMenu.Container = Container;
DropMenu.Item = Item;

export default DropMenu;
