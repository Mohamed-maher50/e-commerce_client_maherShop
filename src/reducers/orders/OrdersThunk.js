import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const createOrder_thunk = createAsyncThunk(
  "orders/post",
  async ({ cartId, data }, { rejectWithValue }) => {
    const { paymentMethodType, ...shippingAddress } = data;

    try {
      const { data } = await axios.get(
        `/api/v1/orders/checkout-session/${cartId}`,
        {
          shippingAddress,
          paymentMethodType,
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
