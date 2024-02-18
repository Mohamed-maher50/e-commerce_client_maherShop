import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  forgotPasswords,
  signUp_Async,
  verifyRestPasswordCode_API,
  loginIn,
  updateUserAddress,
} from "./userThunks";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    errors: [],
    user: null,
    isAuthenticated: false,
    restPasswordStatus: {
      email: "",
      isVerified: false,
      success: false,
    },
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
      axios.defaults.headers.Authorization = `Bearer ${payload?.token}`;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
      axios.defaults.headers.Authorization = ``;
    },
  },
  extraReducers: (builder) => {
    //login API
    builder.addCase(loginIn.fulfilled, (state, { payload }) => {
      state.user = payload;

      axios.defaults.headers.Authorization = `Bearer ${payload?.token}`;
      localStorage.setItem("user", JSON.stringify(payload));
    });
    builder.addCase(loginIn.rejected, (state, { payload }) => {
      console.log(payload);
      if (Array.isArray(payload)) {
      } else if (payload?.message) {
        toast.error(payload.message);
      }
    });

    //signUp
    builder.addCase(signUp_Async.pending, (state, { payload }) => {});
    builder.addCase(signUp_Async.fulfilled, (state, { payload }) => {
      state.user = payload;
      axios.defaults.headers.Authorization = `Bearer ${payload?.token}`;
      localStorage.setItem("user", JSON.stringify(payload));
    });
    builder.addCase(signUp_Async.rejected, (sate, { payload }) => {
      if (Array.isArray(payload)) {
        payload.map((err) => {
          toast.error(err.msg);
        });
      } else if (payload.message) {
        toast.error(payload.message);
      }
    });
    // forgotPassword_api
    builder.addCase(forgotPasswords.fulfilled, (state, { payload }) => {
      state.restPasswordStatus.isVerified = true;
      state.restPasswordStatus.email = payload.email;
      toast.success("check your email 📨 ");
    });
    // verifyRestPasswordCode_API
    builder.addCase(
      verifyRestPasswordCode_API.fulfilled,
      (state, { payload, meta, type }) => {
        state.restPasswordStatus.success = true;
      }
    );
    builder.addCase(
      verifyRestPasswordCode_API.rejected,
      (data, { payload }) => {}
    );
    builder.addCase(updateUserAddress.fulfilled, (state, { payload }) => {
      toast.success("successful ❤️✅");
    });
    builder.addCase(updateUserAddress.rejected, (state, { payload }) => {
      payload;
    });
  },
});
export const { signIn, addUser, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
