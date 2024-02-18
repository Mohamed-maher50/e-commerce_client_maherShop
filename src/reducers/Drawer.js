import { createSlice } from "@reduxjs/toolkit";

const DrawerSlice = createSlice({
  name: "review",
  initialState: {
    status: false,
  },
  reducers: {
    setDrawer: (state) => {
      state.status = !state.status;
    },
  },
});
export const { setDrawer } = DrawerSlice.actions;
export default DrawerSlice.reducer;
