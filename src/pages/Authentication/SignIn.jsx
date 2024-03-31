import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginIn } from "../../reducers/user/userThunks";
import GoogleProviderButton from "../../components/GoogleProviderButton";

const validation = {
  emailValidation: {
    required: "Please Email is required",
    minLength: {
      message: "not valid email",
      value: 5,
    },
  },
  passwordValidation: {},
};
const SignIn = () => {
  const nav = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    if (user) {
      if (!location.state) {
        nav("/", {
          replace: false,
        });
      } else {
        nav(location.state, {
          replace: false,
        });
      }
    }
  }, [user]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const location = useLocation();
  location.state;
  const handleOnSubmit = async (data) => {
    dispatch(loginIn(data));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="w-fit  mx-auto border-2 flex mt-5 flex-col gap-7 p-4"
      >
        <div>
          <input
            type="email"
            {...register("email", validation.emailValidation)}
            className="input  input-primary w-96 block placeholder:capitalize"
            placeholder="Enter you email"
          />
          <p
            className={`  text-error duration-500 ${
              errors.email ? "opacity-100" : "opacity-0"
            }`}
          >
            {errors.email?.message}
          </p>
        </div>

        <div>
          <input
            type="password"
            {...register("password", {
              required: "Please Enter password",
            })}
            className="input w-full input-primary"
            placeholder="Enter Your password"
          />
          <p
            className={`  text-error duration-500 ${
              errors.password ? "opacity-100" : "opacity-0"
            }`}
          >
            {errors.password?.message}
          </p>
        </div>

        <div className="grid gap-2">
          <button
            // onClick={() => dispatch(addUser(user))}
            className="btn btn-primary text-white block w-full px-5 rounded-sm placeholder:capitalize"
          >
            submit
          </button>
          <div className="mx-auto before:w-28 before:absolute before:bg-gray-400 text-lg uppercase before:top-1/2  mt-5 -translate-y-1/2 before:h-px before:-left-full before:-translate-x-full  after:w-28 after:absolute after:bg-gray-400  after:top-1/2 after:h-px after:-left-0 after:translate-x-1/2    relative">
            or
          </div>
          <GoogleProviderButton />
          <div className="flex justify-between">
            <Link
              to={"/auth/forgetPassword"}
              className="text-primary underline"
            >
              forget your password
            </Link>
            <Link
              to={"/auth/signUp"}
              className="underline text-sm text-blue-500"
            >
              i don't have account
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
