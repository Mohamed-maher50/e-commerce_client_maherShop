import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const subcategoriesBelongToCategory_Thunk = createAsyncThunk(
  "subcategories/get",
  async (categoryId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/v1/categories/${categoryId}/subcategories`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
