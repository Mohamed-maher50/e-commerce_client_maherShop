import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = ({ className = "" }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <ul className="menu w-full max-sm:hidden bg-base-200 flex  flex-wrap menu-horizontal flex-col rounded-box">
        <li>
          <h2 className="menu-title">Dashboard</h2>
          <ul className="menu w-full max-lg:menu-horizontal flex flex-wrap">
            <li>
              <Link to={"users"}>Users</Link>
            </li>
            <li>
              <Link to={"/admin/products-management"}>
                products managements
              </Link>
            </li>
            <li>
              <Link to={"/admin/brands"}> brands</Link>
            </li>
            <li>
              <Link to={"/admin/categories"}> categories</Link>
            </li>
            <li>
              <Link to={"/admin/create-product"}> products</Link>
            </li>
            <li>
              <Link to={"/admin/subcategories"}>subcategories</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
