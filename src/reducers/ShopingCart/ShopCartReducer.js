import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  GetShopCart,
  addToCart_Thunk,
  applyCoupon_Thunk,
  deleteProduct_Thunk,
  submitLocalProducts,
  updateAmount_Thunk,
} from "./ShopingCartThunks";

const shopCartSlice = createSlice({
  name: "shopCart",
  initialState: {
    items: [],
    cart: null,
    loading: false,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      if (!payload) return;
      const checkIsProductExist = state.items?.findIndex(
        (item) => item?.product._id == payload?.product._id
      );
      if (checkIsProductExist < 0) {
        state.items.push(payload);
      } else {
        let obj = state.items[checkIsProductExist];
        obj.quantity++;
        state.items[checkIsProductExist] = obj;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItemFromCart: (state, { payload }) => {
      const productId = payload;
      if (!productId) return;
      const newState = state.items.filter(({ product }) => {
        return product._id != productId;
      });

      state.items = newState;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateCart: (state, { payload }) => {
      if (payload) {
        state.cart = payload;
        if (!payload.data) state.items = [];
        else state.items = [...payload?.data?.cartItems];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetShopCart.fulfilled, (state, { payload }) => {
      if (payload) {
        state.items = [...payload.data.products];
        state.cart = payload?.data;
      }
      state.loading = false;
    });
    builder.addCase(GetShopCart.rejected, (state, { payload }) => {
      state.loading = false;
    });
    builder.addCase(GetShopCart.pending, (state, { payload }) => {
      state.loading = true;
    });
    // add to cart
    builder.addCase(addToCart_Thunk.fulfilled, (state, { payload }) => {
      state.items = [...payload.data.products];
      state.cart = payload?.data;
      toast.success("successful addition ✅❤️");
    });
    builder.addCase(addToCart_Thunk.rejected, (state, { payload }) => {
      toast.error("maybe your connection is not good🥺");
    });
    builder.addCase(submitLocalProducts.fulfilled, () => {
      localStorage.removeItem("cart");
    });
    // delete product from cart
    builder.addCase(deleteProduct_Thunk.fulfilled, (state, { payload }) => {
      state.items = payload.products;
      state.cart = payload;
      toast.success("success delete product");
    });
    builder.addCase(deleteProduct_Thunk.rejected, (state, { payload }) => {
      if (String(payload)) toast.error(payload);
    });
    builder.addCase(updateAmount_Thunk.fulfilled, (state, { payload }) => {
      state.cart = payload?.data;
      state.items = payload?.data?.products;

      toast.success("success update amount");
    });
    builder.addCase(updateAmount_Thunk.rejected, (state, { payload }) => {});
    // apply coupon

    builder.addCase(applyCoupon_Thunk.fulfilled, (state, { payload }) => {
      //

      state.cart = payload?.data;
      state.items = payload?.data?.products;
    });
  },
});
export const { addToCart, updateQuantity, removeItemFromCart, updateCart } =
  shopCartSlice.actions;
export default shopCartSlice.reducer;
