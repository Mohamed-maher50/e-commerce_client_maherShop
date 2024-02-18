import React from "react";
import { FormInput } from "../../components/utility/Inputs";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ChangePassword_ApiThunk } from "../../reducers/user/Settings/Setting_Thunk";
import { useEffect } from "react";
import {
  clearErrors,
  updateStatus,
} from "../../reducers/user/Settings/SettingReducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm();
  const nav = useNavigate();
  const {
    errors: apiErrors,
    status,
    isLoading,
  } = useSelector((state) => state.userSettingReducer);
  useEffect(() => {
    if (status) {
      localStorage.removeItem("user");
    }
    return () => {
      dispatch(updateStatus(null));
    };
  }, [status]);
  useEffect(() => {
    if (apiErrors.length > 0) {
      apiErrors?.map((err) => {
        toast.error(err?.msg);
      });
    }
  }, [apiErrors]);
  const dispatch = useDispatch();
  const submitHandler = (values) => {
    toast.info("please wait...");
    dispatch(ChangePassword_ApiThunk(values));
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="grid lg:grid-cols-2 gap-2  "
    >
      <div>
        <FormInput
          label="Current password"
          {...register("currentPassword", {
            required: "Please Enter current password",
          })}
          status={false}
          type="password"
          placeholder="Enter current password"
        />
        {errors.currentPassword && (
          <label className="text-red-400 capitalize">
            {errors.currentPassword.message}
          </label>
        )}
      </div>
      <div>
        <FormInput
          label="New password"
          status={false}
          type="password"
          {...register("password", {
            required: "Please enter password",
            minLength: {
              value: 5,
              message: "password must be > 5 characters",
            },
          })}
          placeholder="Enter new password"
        />
        {errors.password && (
          <label className="text-red-400 capitalize">
            {errors.password.message}
          </label>
        )}
      </div>
      <div>
        <FormInput
          label="confirm password"
          placeholder="Enter confirm password"
          {...register("passwordConfirm", {
            minLength: {
              value: 5,
              message: "password must be > 5 characters",
            },
            pattern: {
              value: /^(?=.*[a-zA-Z]).+$/,
              message: "Password must include at least one letter",
            },
            validate: (value) => {
              return (
                value == watch("password") ||
                "confirm password not equal password"
              );
            },
          })}
          status={false}
          type="password"
        />
        {errors.passwordConfirm && (
          <label className="text-red-400 capitalize">
            {errors.passwordConfirm.message}
          </label>
        )}
      </div>
      <button className="btn w-fit self-end px-5 btn-primary text-white capitalize tracking-widest ">
        submit
      </button>
    </form>
  );
};

export default ChangePassword;
