import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const DrawerToggle = () => {
  const { status } = useSelector((state) => state.DrawerReducer);
  const checkBox = useRef();
  useEffect(() => {
    if (!status) checkBox.current.checked = false;
  }, [status]);
  return (
    <input
      id="my-drawer"
      ref={checkBox}
      type="checkbox"
      className="drawer-toggle"
    />
  );
};

export default DrawerToggle;
