import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrands_thunk = createAsyncThunk(
  "brands/getAll",
  async (query = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/brands${query}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
export const createBrand_thunk = createAsyncThunk(
  "brands/create",
  async (brandData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/brands`, brandData);

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const deleteBrand_thunk = createAsyncThunk(
  "brands/delete",
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/v1/brands/${_id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
