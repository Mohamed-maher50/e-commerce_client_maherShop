import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
const ProtectRoute = ({ children }) => {
  const { user, isAuthenticated } = useSelector((state) => state.AuthReducer);
  const nav = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!user)
      nav("/auth/signIn", {
        state: location.pathname,
      });
  }, [user]);

  if (!user) return <></>;
  return <>{children}</>;
};

export default ProtectRoute;
