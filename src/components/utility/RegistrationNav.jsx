import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";

const RegistrationNav = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  if (user) return <></>;
  return (
    <div className="container mx-auto">
      <div className=" p-3 flex gap-2">
        <div role="tablist" className="tabs  tabs-boxed">
          <Link
            to={"/auth/signUp"}
            role="tab"
            className="underline tab text-lg flex gap-1 items-center capitalize"
          >
            <AiOutlineUserAdd />
            <span>create account</span>
          </Link>

          <Link
            role="tab"
            to={"/auth/signIn"}
            className="underline text-lg tab flex gap-1 items-center  capitalize"
          >
            <span>sign in</span>
            <CiLogin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationNav;
