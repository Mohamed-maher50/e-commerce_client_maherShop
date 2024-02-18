import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const nav = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const [hidePassword, setHidePassword] = useState(true);
  const { restPasswordStatus } = useSelector((state) => state.AuthReducer);

  const HandleOnSubmit = async ({ password }) => {
    try {
      const { data } = await axios.put("/api/v1/auth/resetPassword", {
        email: restPasswordStatus.email,
        newPassword: password,
      });
      nav("/auth/signIn/", {
        replace: false,
      });
    } catch (error) {
      error;
    }
  };

  return (
    <div className="container mx-auto">
      <form
        onSubmit={handleSubmit(HandleOnSubmit)}
        className=" w-96 mx-auto pt-10"
      >
        <div className="gap-2 grid">
          <div className="flex items-center border-2 rounded-lg  border-primary">
            <input
              {...register("password", {
                required: "please enter your password",

                minLength: {
                  value: 5,
                  message: "your password short",
                },
              })}
              type={hidePassword ? "password" : "text"}
              placeholder="Enter new password"
              className="input  focus:border-none focus:outline-none   w-full max-w-5xl "
            />
            <div
              className="p-2 text-xl cursor-pointer"
              onClick={() => setHidePassword(!hidePassword)}
            >
              {!hidePassword ? <FiEye /> : <FiEyeOff />}
            </div>
          </div>

          {/* {errors.password.message} */}
          {errors.password && (
            <label className="text-error capitalize">
              {errors.password.message}
            </label>
          )}
        </div>
        <button className="btn mt-2   btn-primary text-white text-xl">
          submit
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
