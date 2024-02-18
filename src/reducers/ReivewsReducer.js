import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
export const CreateReviewAsyncThunk = createAsyncThunk(
  "review/createReview",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/v1/reviews", formData);

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const ReviewsSlice = createSlice({
  name: "review",
  initialState: {
    errors: [],
    reviews: [],
  },
  reducers: {
    resetErrors: (state) => {
      state.errors = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CreateReviewAsyncThunk.fulfilled, () => {
      toast.success("review is create thanks💕🙌");
    });
    builder.addCase(CreateReviewAsyncThunk.rejected, (state, { payload }) => {
      state.errors = [];
      if (payload && Array.isArray(payload)) state.errors = payload;
    });
  },
});
export const { resetErrors } = ReviewsSlice.actions;
export default ReviewsSlice.reducer;
