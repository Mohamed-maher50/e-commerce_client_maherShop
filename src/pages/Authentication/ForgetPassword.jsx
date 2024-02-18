import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPasswords } from "../../reducers/user/userThunks";

const ForgetPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { restPasswordStatus, user } = useSelector(
    (state) => state.AuthReducer
  );
  const nav = useNavigate();
  if (restPasswordStatus.isVerified) nav("/auth/verifyRestPasswordCode");
  const handleOnSubmit = (data) => {
    dispatch(forgotPasswords(data));
  };
  useEffect(() => {
    if (user) nav(-1);
  }, [user]);
  return (
    <>
      <h1 className="text-3xl mx-auto w-fit text-primary pt-9 ">
        ForgetPassword?
      </h1>
      <form
        className="w-fit mx-auto  flex flex-col gap-3 pt-4"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <h2>
          Please enter your email address below to receive a password reset
          link.
        </h2>
        <div className="flex border-primary border w-fit">
          <input
            type="email"
            {...register("email", { required: "please enter your email" })}
            className="input input-primary border-none focus:outline-none w-96 rounded-r-none block placeholder:capitalize"
            placeholder="Enter Your email"
          />
          <button className="btn btn-primary rounded-none  text-white w-fit px-5 placeholder:capitalize">
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgetPassword;
