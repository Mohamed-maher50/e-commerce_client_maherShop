import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import RequireSignIn from "../../../services/RequireSignIn";
import { useDispatch } from "react-redux";
import { setDrawer } from "../../../reducers/Drawer";
import { IoMdSettings } from "react-icons/io";

import SearchInput from "../SearchInput";
import Navbar_search_hook from "../../../hooks/search/Navbar_search_hook";
const DrawerSide = () => {
  const dispatch = useDispatch();
  const [handleOnChange] = Navbar_search_hook();
  const drawer = document.getElementById("my-drawer");
  console.log();
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay "
      ></label>
      <ul className="menu  flex flex-col gap-2 p-4 w-80 min-h-full bg-base-200 text-base-content">
        <Link to={"/"} onClick={() => drawer.click()}>
          <img
            src="/Logo1.jpg"
            height={60}
            className="rounded-md h-32 object-contain"
          />
        </Link>
        <SearchInput
          handleOnChange={handleOnChange}
          onSubmit={() => drawer.click()}
          className="grow-0"
        />
        <RequireSignIn>
          <li onClick={() => drawer.click()} className="block">
            <Link to={"user/profile"}>profile page</Link>
          </li>
          <li className="cursor-pointer flex p-0 h-fit">
            <Link
              to={"/account/MyWishList"}
              onClick={() => drawer.click()}
              className="flex"
            >
              <FaHeart className=" w-5 h-5  drop-shadow-md   text-red-500 relative " />
              <span>My WishList</span>
            </Link>
          </li>
          <li
            className="cursor-pointer p-0 h-fit"
            onClick={() => drawer.click()}
          >
            <Link to={"/account/info"}>
              <IoMdSettings className=" w-5 h-5  drop-shadow-md   text-red-500 relative " />
              <label>Settings</label>
            </Link>
          </li>
        </RequireSignIn>
      </ul>
    </div>
  );
};

export default DrawerSide;
