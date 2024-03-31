import { createSlice } from "@reduxjs/toolkit";
import {
  createCategories_thunk,
  deleteCategories_thunk,
  getCategories_thunk,
  updateCategories_thunk,
} from "./Thunks";
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
    builder.addCase(deleteCategories_thunk.fulfilled, () => {
      toast.success("✅ deleted");
    });
    builder.addCase(deleteCategories_thunk.rejected, () => {
      toast.warn("error happened");
    });

    builder.addCase(updateCategories_thunk.fulfilled, (_, { payload }) => {
      toast.success("✅ success update");
      return 200;
    });
    builder.addCase(updateCategories_thunk.rejected, (_, { payload }) => {
      toast.error("❎ error update");
    });
  },
});

export default CategorySlice.reducer;
