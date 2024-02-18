import React from "react";
import { Link } from "react-router-dom";

const Sections = () => {
  return (
    <div className="grid gap-2 capitalize grid-cols-1 p-2">
      <Link to={"/account/MyWishList"}>my Wishlist</Link>
      <Link to={"/account/info"}>account information</Link>
      <Link to={"/account/addresses"}>Your addresses</Link>
      <Link to={"/account/changePassword"}>change Password</Link>
    </div>
  );
};

export default Sections;
