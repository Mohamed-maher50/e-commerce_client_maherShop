import { createSlice } from "@reduxjs/toolkit";
import { createCategories_thunk, getCategories_thunk } from "./Thunks";
import { toast } from "react-toastify";

const CategorySlice = createSlice({
  name: "categories",
  initialState: {
    loading: true,
    categories: {},
    errors: [],
    status: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories_thunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories_thunk.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
    });
    builder.addCase(getCategories_thunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(createCategories_thunk.fulfilled, (state, { payload }) => {
      state.status = 201;
      toast.success("success create new category");
    });
    builder.addCase(createCategories_thunk.rejected, (state, { payload }) => {
      toast.error("can not create category");
    });
  },
});

export default CategorySlice.reducer;
