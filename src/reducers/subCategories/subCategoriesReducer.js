import { createSlice } from "@reduxjs/toolkit";

import { subcategoriesBelongToCategory_Thunk } from "./subCategoriesThunks";
export const subCategoriesSlice = createSlice({
  name: "subCategories",
  initialState: {
    subCategoryBelongToCategory: {
      isLoading: false,
      subCategories: [],
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      subcategoriesBelongToCategory_Thunk.pending,
      (state, { payload }) => {
        state.subCategoryBelongToCategory.isLoading = true;
      }
    );
    builder.addCase(
      subcategoriesBelongToCategory_Thunk.fulfilled,
      (state, { payload }) => {
        state.subCategoryBelongToCategory.subCategories = payload;
        state.subCategoryBelongToCategory.isLoading = false;
      }
    );
    builder.addCase(
      subcategoriesBelongToCategory_Thunk.rejected,
      (state, { payload }) => {
        state.subCategoryBelongToCategory.isLoading = false;
      }
    );
  },
});
export default subCategoriesSlice.reducer;
