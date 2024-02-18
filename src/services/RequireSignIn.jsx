import React from "react";
import { useSelector } from "react-redux";

const RequireSignIn = ({ children }) => {
  const { user } = useSelector((state) => state.AuthReducer);
  if (!user) return <></>;
  return <>{children}</>;
};

export default RequireSignIn;
