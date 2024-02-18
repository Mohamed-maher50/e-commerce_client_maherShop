import { createSlice } from "@reduxjs/toolkit";

import { ChangePassword_ApiThunk } from "./Setting_Thunk";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

export const SettingSlice = createSlice({
  name: "userSettings",
  initialState: {
    errors: [],
    status: null,
    isLoading: true,
  },
  reducers: {
    clearErrors: (state) => {
      state.errors = [];
    },
    updateStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ChangePassword_ApiThunk.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(ChangePassword_ApiThunk.fulfilled, (state, { payload }) => {
      state.status = true;
      state.isLoading = false;
    });
    builder.addCase(ChangePassword_ApiThunk.rejected, (state, { payload }) => {
      if (Array.isArray(payload)) {
        state.errors = payload;
      }
      state.isLoading = false;
    });
  },
});
export const { clearErrors, updateStatus } = SettingSlice.actions;
export default SettingSlice.reducer;
