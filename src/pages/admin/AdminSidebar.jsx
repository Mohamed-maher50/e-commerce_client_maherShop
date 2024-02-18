import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = ({ className = "" }) => {
  return (
    <div className={` ${className}`}>
      <ul className="menu bg-base-200  menu-horizontal rounded-box">
        <li>
          <h2 className="menu-title">Dashboard</h2>
          <ul className="menu  max-lg:menu-horizontal flex flex-wrap">
            <li>
              <Link
                to={"/admin/products-management"}
                className="capitalize font-bold underline"
              >
                products managements
              </Link>
            </li>
            <li>
              <Link
                to={"/admin/add-brand"}
                className="capitalize font-bold underline"
              >
                add brand
              </Link>
            </li>
            <li>
              <Link
                to={"/admin/add-category"}
                className="capitalize font-bold underline"
              >
                add category
              </Link>
            </li>
            <li>
              <Link
                to={"/admin/create-product"}
                className="capitalize font-bold underline"
              >
                create product
              </Link>
            </li>
            <li>
              <Link
                to={"/admin/subcategories/create-subcategories"}
                className="capitalize font-bold underline"
              >
                create subcategories
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
