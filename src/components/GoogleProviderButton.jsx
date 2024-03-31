import React from "react";
import GoogleButton from "./utility/GoogleButton";

import GoogleProvider from "../services/GoogleProvider";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../reducers/user/userThunks";
const GoogleProviderButton = () => {
  const dispatch = useDispatch();
  const handleGoogleLogin = async () => {
    const [user, err] = await GoogleProvider();

    if (!err) {
      const token = await user.getIdToken();
      dispatch(loginWithGoogle(token));
    }
  };

  return (
    <div>
      <GoogleButton type="button" onClick={handleGoogleLogin} />
    </div>
  );
};

export default GoogleProviderButton;
