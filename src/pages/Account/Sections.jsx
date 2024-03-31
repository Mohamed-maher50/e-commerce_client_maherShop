import React from "react";
import { Link } from "react-router-dom";

const Sections = () => {
  return (
    <div className="grid menu gap-2  capitalize grid-cols-1 p-2">
      <li>
        <Link to={"/account/MyWishList"}>my Wishlist</Link>
      </li>
      <li>
        <Link to={"/account/info"}>account information</Link>
      </li>
      <li>
        <Link to={"/account/addresses"}>Your addresses</Link>
      </li>
      <li>
        <Link to={"/account/changePassword"}>change Password</Link>
      </li>
      <li>
        <Link to={"/account/myOrders"}>my orders</Link>
      </li>
      <li>
        <Link
          to={"/account/delete"}
          className="border   rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 hover:text-white focus:outline-none focus:shadow-outline"
        >
          delete account
        </Link>
      </li>
    </div>
  );
};

export default Sections;
