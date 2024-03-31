import { createSlice } from "@reduxjs/toolkit";
import { createOrder_thunk } from "./OrdersThunk";

const OrdersSlice = createSlice({
  name: "orders",
  initialState: {
    loading: true,
    orders: {},
    errors: [],
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder_thunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createOrder_thunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      return payload;
    });
    builder.addCase(createOrder_thunk.rejected, (state) => {
      state.o.loading = false;
    });
  },
});

export default OrdersSlice.reducer;
