import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const GetShopCart = createAsyncThunk(
  "shopCart/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/v1/cart");
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);
export const addToCart_Thunk = createAsyncThunk(
  "shopCart/add",
  async ({ productId, color }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post("/api/v1/cart/", {
        productId,
        color,
      });

      return data;
    } catch (error) {
      return rejectWithValue({ error, id });
    }
  }
);
export const deleteProduct_Thunk = createAsyncThunk(
  "shopCart/delete",
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/v1/cart/${_id}`);
      return data?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateAmount_Thunk = createAsyncThunk(
  "shopCart/update",
  async ({ _id, count }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/api/v1/cart/${_id}`, {
        count,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const submitLocalProducts = createAsyncThunk(
  "shopCart/submitLocalProducts",
  async (_, { rejectWithValue }) => {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    if (!localCart) return;

    try {
      const products = await localCart?.map(async (p) => {
        ({
          productId: p.product._id,
          quantity: p.quantity,
        });
        return await axios.post("/api/v1/cart", {
          productId: p.product._id,
          quantity: p.quantity,
        });
      });
      const res = await Promise.all(products);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const applyCoupon_Thunk = createAsyncThunk(
  "shopCart/applyCoupon",
  async (couponName, { rejectWithValue }) => {
    try {
      const { data } = await axios.put("/api/v1/cart/applyCoupon", {
        couponName,
      });
      return data;
    } catch (error) {
      return error;
    }
  }
);
