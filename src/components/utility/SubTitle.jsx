import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btnTitle, pathText, className }) => {
  return (
    <div
      className={`text-base pt-4 flex justify-between p-2 capitalize ${
        className ? className : ""
      }`}
    >
      <div className=" font-bold text-gray-700">{title}</div>
      {btnTitle ? (
        <Link to={`${pathText}`} style={{ textDecoration: "none" }}>
          <div className="shopping-now font-bold  underline ">{btnTitle}</div>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
