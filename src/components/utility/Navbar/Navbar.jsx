import React from "react";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { setDrawer } from "../../../reducers/Drawer";
import DropMenu from "../DropMenu/DropMenu";
import RequireSignIn from "../../../services/RequireSignIn";
import SearchContainer from "../../../containers/search/SearchContainer";
import useNavbar_Hook from "../../../hooks/nav/Navbar_Hook";
import ShoppingMenu from "../../cart/ShoppingMenu/ShoppingMenu";
import AllowTo from "../AllowTo";
const Navbar = () => {
  const [user, handleLogOut] = useNavbar_Hook();

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center text-xl ">
            <Link to={"/"}>
              <img
                src="/Logo1.jpg"
                width={60}
                height={60}
                className="rounded-md object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:block grow  p-5">
            <SearchContainer />
          </div>
          <div className="ml-auto md:block">
            {!user && (
              <DropMenu.Container tabIndex={0} label={"Account"}>
                <Link
                  to={"/auth/signin"}
                  className="btn btn-primary text-white"
                >
                  Sign in
                </Link>
                <Link to={"/auth/SignUp"} className="btn  ">
                  Sign up
                </Link>
              </DropMenu.Container>
            )}
          </div>

          <label
            onClick={() => dispatch(setDrawer(true))}
            htmlFor="my-drawer"
            className="md:hidden flex gap-4 "
          >
            <BiMenu className="text-3xl cursor-pointer" />
          </label>
          <div className="hidden md:flex justify-between gap-5">
            <RequireSignIn>
              <DropMenu.Container tabIndex={0} label={user?.data?.name}>
                <AllowTo isAllow={user?.data?.role} allow={"user"}>
                  <Link to={"/account/info"} className="btn">
                    settings
                  </Link>
                </AllowTo>
                <AllowTo isAllow={user?.data?.role} allow={"admin"}>
                  <DropMenu.Item>
                    <Link to={"/admin"}>dashboard</Link>
                  </DropMenu.Item>
                </AllowTo>
                <DropMenu.Item>
                  {user && (
                    <span
                      onClick={handleLogOut}
                      className="flex cursor-pointer"
                    >
                      <BiLogOut className="" />
                      logout
                    </span>
                  )}
                </DropMenu.Item>
              </DropMenu.Container>
            </RequireSignIn>
            <AllowTo isAllow={user?.data?.role} allow={"user"}>
              <ShoppingMenu />
            </AllowTo>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
