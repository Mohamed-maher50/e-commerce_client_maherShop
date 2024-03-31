import React from "react";
import { Link } from "react-router-dom";
import RequireSignIn from "../../../services/RequireSignIn";
import { IoMdSettings } from "react-icons/io";
import SearchInput from "../SearchInput";
import useFiltrationHook from "../../../hooks/useFiltrationHook";
import AllowTo from "../AllowTo";
import { useSelector } from "react-redux";
const DrawerSide = () => {
  const { handleSearch } = useFiltrationHook();
  const { user } = useSelector((state) => state.AuthReducer);
  const drawer = document.getElementById("my-drawer");

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay "
      ></label>
      <ul className="menu flex flex-col gap-2 p-4 w-80 min-h-full bg-base-200 text-base-content">
        <Link to={"/"} onClick={() => drawer.click()}>
          <img src="/Logo1.jpg" className="rounded-md h-20 object-contain" />
        </Link>
        <SearchInput
          handleOnChange={handleSearch}
          onSubmit={() => drawer.click()}
          className="grow-0"
        />
        <RequireSignIn>
          <AllowTo isAllow={user?.data?.role} allow={"user"}>
            <li onClick={() => drawer.click()} className="capitalize">
              <Link to={"user/profile"}>profile page</Link>
            </li>
            <li onClick={() => drawer.click()} className=" capitalize">
              <Link to={"account/myOrders"}>my orders</Link>
            </li>
          </AllowTo>
          <AllowTo isAllow={user?.data?.role} allow={"user"}>
            <li className="cursor-pointer capitalize flex p-0 h-fit">
              <Link to={"/account/MyWishList"} onClick={() => drawer.click()}>
                <span>My WishList</span>
              </Link>
            </li>
          </AllowTo>
          <AllowTo isAllow={user?.data?.role0} allow={"user"}>
            <li
              className="cursor-pointer p-0 h-fit"
              onClick={() => drawer.click()}
            >
              <Link to={"/account/info"}>
                <IoMdSettings className=" w-5 h-5  drop-shadow-md   text-red-500 relative " />
                <label>Settings</label>
              </Link>
            </li>
          </AllowTo>
          {/* admin  */}
          <AllowTo isAllow={user?.data?.role} allow={"admin"}>
            <li>
              <Link
                className="text-start cursor-pointer p-2  capitalize "
                onClick={() => drawer.click()}
                to={"/admin/add-category"}
              >
                categories
              </Link>
            </li>
          </AllowTo>
          <AllowTo isAllow={user?.data?.role} allow={"admin"}>
            <li>
              <Link
                className="text-start cursor-pointer p-2  capitalize "
                onClick={() => drawer.click()}
                to={"/admin/add-brand"}
              >
                brands
              </Link>
            </li>
          </AllowTo>
          <AllowTo isAllow={user?.data?.role} allow={"admin"}>
            <li>
              <Link
                className="text-start cursor-pointer p-2  capitalize "
                onClick={() => drawer.click()}
                to={"/admin/create-product"}
              >
                products
              </Link>
            </li>
          </AllowTo>
          <AllowTo isAllow={user?.data?.role} allow={"admin"}>
            <li>
              <Link
                className="text-start cursor-pointer p-2  capitalize "
                onClick={() => drawer.click()}
                to={"/admin/create-product"}
              >
                orders
              </Link>
            </li>
          </AllowTo>
          <AllowTo isAllow={user?.data?.role} allow={"admin"}>
            <li>
              <Link
                className="text-start cursor-pointer p-2  capitalize "
                onClick={() => drawer.click()}
                to={"/admin/subcategories/create-subcategories"}
              >
                subcategories
              </Link>
            </li>
          </AllowTo>
          <button className="btn btn-primary  btn-outline hover:text-white">
            Logout
          </button>
        </RequireSignIn>
      </ul>
    </div>
  );
};

export default DrawerSide;
