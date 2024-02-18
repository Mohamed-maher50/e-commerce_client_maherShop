import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp_Async } from "../../reducers/user/userThunks";

const SignUp_hook = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleOnSubmit = (data) => {
    dispatch(signUp_Async(data));
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      nav("/");
    }
  }, [user]);
  return [user, register, watch, handleSubmit, errors, handleOnSubmit];
};

export default SignUp_hook;
