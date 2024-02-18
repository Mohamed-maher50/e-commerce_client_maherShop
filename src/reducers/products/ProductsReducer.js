import { createSlice } from "@reduxjs/toolkit";
import { createProduct_Thunk, getProducts_async } from "./ProductsThunks";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: null,
    productsResult: [],
    errors: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts_async.fulfilled, (state, { payload }) => {
      if (payload) {
        state.productsResult = payload;
      }
    });
    builder.addCase(createProduct_Thunk.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
    builder.addCase(createProduct_Thunk.rejected, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export default productsSlice.reducer;
