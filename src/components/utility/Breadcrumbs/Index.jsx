import React from "react";
import { useLocation, Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div className="text-md text-gray-400 breadcrumbs py-7">
      <ul>
        <Link to={"/"}>
          <IoHomeOutline />
        </Link>
        {location.pathname.split("/").map((path, index) => {
          if (index == pathnames.length)
            return (
              <li className="cursor-auto" key={index}>
                {path}
              </li>
            );
          return (
            <li key={index}>
              <Link
                to={`/${pathnames.slice(0, index).join("/")}`}
                className="capitalize"
              >
                {path}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
