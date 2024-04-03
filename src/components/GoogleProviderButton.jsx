import React from "react";
import GoogleButton from "./utility/GoogleButton";

import GoogleProvider from "../services/GoogleProvider";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../reducers/user/userThunks";
import { useEffect } from "react";
import {
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../pages/Authentication/firebase";
import { useNavigate } from "react-router-dom";
const GoogleProviderButton = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleGoogleLogin = async () => {
    const [user, err] = await GoogleProvider();
  };
  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        console.log(result.user);
        let token = await result.user.getIdToken();

        dispatch(loginWithGoogle(token));
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <GoogleButton type="button" onClick={handleGoogleLogin} />
    </div>
  );
};

export default GoogleProviderButton;
