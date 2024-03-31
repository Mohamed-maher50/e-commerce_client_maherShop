import { createSlice } from "@reduxjs/toolkit";
import {
  createBrand_thunk,
  deleteBrand_thunk,
  getBrands_thunk,
} from "./BrandsThunks";
import { toast } from "react-toastify";
const BrandsSlice = createSlice({
  name: "categories",
  initialState: {
    loading: true,
    brands: {},
    errors: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getBrands_thunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBrands_thunk.fulfilled, (state, { payload }) => {
      state.brands = payload;
      state.loading = false;
    });
    builder.addCase(getBrands_thunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(createBrand_thunk.fulfilled, (state, { payload }) => {
      toast.success("brand has created");
    });
    builder.addCase(createBrand_thunk.rejected, (state, { payload }) => {
      toast.error("some error happen during create brand");
    });
    builder.addCase(deleteBrand_thunk.fulfilled, (state, { payload }) => {
      toast.success("deleted");
    });
    builder.addCase(deleteBrand_thunk.rejected, (state, { payload }) => {
      toast.error("not completed");
    });
  },
});

export default BrandsSlice.reducer;
