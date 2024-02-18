import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts_async = createAsyncThunk(
  "products/getProducts",
  async (query = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/products${query}`);
      //    (data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const createProduct_Thunk = createAsyncThunk(
  "products/create",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/products`, formData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
