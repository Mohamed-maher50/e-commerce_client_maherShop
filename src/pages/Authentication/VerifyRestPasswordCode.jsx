import React from "react";

import { useDispatch, useSelector } from "react-redux";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyRestPasswordCode_API } from "../../reducers/user/userThunks";

const VerifyRestPasswordCode = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [OTP, setOTP] = useState("");
  const { user, restPasswordStatus } = useSelector(
    (state) => state.AuthReducer
  );
  useEffect(() => {
    if (restPasswordStatus.success) {
      nav("/auth/restPasswordCode", { replace: false });
    }
  }, [restPasswordStatus.success]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyRestPasswordCode_API({ resetCode: OTP }));
  };
  useEffect(() => {
    if (user) nav(-1);
    if (!restPasswordStatus.isVerified) nav("/auth/forgetPassword");
  }, [user, restPasswordStatus.isVerified]);
  return (
    <>
      <div className="container pt-10 mx-auto">
        <form onSubmit={handleOnSubmit} className=" w-96 mt-24 mx-auto ">
          <div className=" ">
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={7}
              otpType="number"
              className=" "
              inputClassName="border-2 scale-125 m-0"
            />
          </div>
          <button className="btn mt-10 mx-auto block btn-primary rounded-none  text-white w-fit px-5 placeholder:capitalize">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default VerifyRestPasswordCode;
