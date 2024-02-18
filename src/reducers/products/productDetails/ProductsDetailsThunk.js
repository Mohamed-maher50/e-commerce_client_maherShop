import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProductDetails = createAsyncThunk(
  "ProductDetails/get",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
