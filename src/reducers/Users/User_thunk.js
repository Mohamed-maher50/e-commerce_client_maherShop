import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/get", async (query = "") => {
  try {
    const { data } = await axios.get(`/api/v1/users${query}`);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteUser = createAsyncThunk(
  "users/delete",
  async (userId, { fulfillWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/v1/users/${userId}`);
      return fulfillWithValue(userId);
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  "users/put",
  async ({ _id, ...FormData }, { fulfillWithValue }) => {
    try {
      const { data } = await axios.put(`/api/v1/users/${_id}`, FormData);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
