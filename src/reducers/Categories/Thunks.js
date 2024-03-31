import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getCategories_thunk = createAsyncThunk(
  "categories/get",
  async (query = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/categories${query}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const createCategories_thunk = createAsyncThunk(
  "categories/post",
  async (categoryData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/categories`, categoryData);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
export const deleteCategories_thunk = createAsyncThunk(
  "categories/delete",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/v1/categories/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const updateCategories_thunk = createAsyncThunk(
  "categories/put",
  async ({ _id, form }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/api/v1/categories/${_id}`, form);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
