import React from "react";
import DrawerToggle from "./DrawerToggle";
import DrawerContent from "./DrawerContent";
import DrawerSide from "./DrawerSide";
const Drawer = ({ children }) => {
  return <div className="drawer">{children}</div>;
};
Drawer.Toggle = DrawerToggle;
Drawer.Content = DrawerContent;
Drawer.Side = DrawerSide;

export default Drawer;
