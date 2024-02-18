import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default LogOut = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer);
  const handleLogOut = () => {
    // dispatch()
  };
  return <button onClick={handleLogOut}>LogOut</button>;
};
