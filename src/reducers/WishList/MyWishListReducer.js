import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
export const getWishList_Async = createAsyncThunk(
  "getWishList/getWishList",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/v1/wishlist");
      if (data?.data) return data.data;
      else return rejectWithValue("can't fetch product");
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const AddToWishList_Async = createAsyncThunk(
  "WishList/add",
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/wishlist`, {
        productId: product?._id,
      });
      return product;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const removeToWishList_Async = createAsyncThunk(
  "WishList/remove",
  async (_id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/v1/wishlist/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const wishListSlice = createSlice({
  name: "WishList",
  initialState: {
    wishListProducts: [],
    wishList: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getWishList_Async.fulfilled, (state, { payload }) => {
      // state.wishList = payload;
      state.wishListProducts = payload;
    });
    builder.addCase(getWishList_Async.rejected, (state, { payload }) => {
      //   if (payload && Array.isArray(payload)) state.errors = payload;
    });
    builder.addCase(AddToWishList_Async.fulfilled, (state, { payload }) => {
      state.wishListProducts = [...state.wishListProducts, payload];
      toast.success("addition succeeded");
      let user = JSON.parse(localStorage.getItem("user"));
      if (user && user.data) {
        user.data.wishlist = payload;
        localStorage.setItem("user", JSON.stringify(user));
      }
    });
    builder.addCase(AddToWishList_Async.rejected, (state, { payload }) => {});
    builder.addCase(removeToWishList_Async.fulfilled, (state, { payload }) => {
      toast.success(" removed success");
      const productFiltration = state.wishListProducts.filter(
        (product) => product._id != payload
      );

      state.wishListProducts = productFiltration;
    });
    builder.addCase(
      removeToWishList_Async.rejected,
      (state, { payload }) => {}
    );
  },
});
export const { resetErrors } = wishListSlice.actions;
export default wishListSlice.reducer;
