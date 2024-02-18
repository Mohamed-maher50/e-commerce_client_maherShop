import React from "react";
import Sections from "./Sections";
import { Outlet } from "react-router-dom";

const AccountPage = () => {
  return (
    <div className="container mx-auto py-5 ">
      <div className="grid grid-cols-6">
        <div className="col-span-6 md:col-span-2 xl:col-span-2">
          <Sections />
        </div>
        <div className="col-span-6 md:col-span-4 xl:col-span-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
