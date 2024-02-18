import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrands_thunk = createAsyncThunk(
  "brands/getAll",
  async (query = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/brands${query}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const createBrand_thunk = createAsyncThunk(
  "categories/create",
  async (brandData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/brands`, brandData);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
