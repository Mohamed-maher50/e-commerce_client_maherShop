import { createSlice } from "@reduxjs/toolkit";
import { getProductDetails } from "./ProductsDetailsThunk";

const productDetailsSlice = createSlice({
  name: "productsDetails",
  initialState: {
    product: {
      loading: false,
      details: {},
    },
    reviews: {
      loading: false,
      reviews: [],
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state) => {
      state.product.loading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, { payload }) => {
      state.product.details = payload?.data;
      state.product.loading = false;
    });
    builder.addCase(getProductDetails.rejected, (state) => {
      state.product.loading = false;
    });
  },
});
export default productDetailsSlice.reducer;
