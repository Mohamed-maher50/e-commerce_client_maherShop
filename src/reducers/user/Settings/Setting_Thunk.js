import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ChangePassword_ApiThunk = createAsyncThunk(
  "userSettings/changePassword",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put("api/v1/users/change-password", data);

      return res?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
