import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllowTo = ({ isAllow, allow, children, replace = false }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (replace && isAllow != allow) return nav("/");
  }, [isAllow]);
  if (isAllow == allow) return <>{children}</>;
  return <></>;
};

export default AllowTo;
