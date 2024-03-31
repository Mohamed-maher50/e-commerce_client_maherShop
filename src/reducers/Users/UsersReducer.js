import { createSlice } from "@reduxjs/toolkit";

import { deleteUser, getUsers, updateUser } from "./User_thunk";

const UsersSlice = createSlice({
  name: "Users",
  initialState: {
    Users: [],
    loading: false,
    deleteRunning: {
      loading: false,
      id: null,
    },
    editRunning: {
      loading: false,
      id: null,
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.Users = payload;
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.loading = false;
    });

    // delete user by admin

    builder.addCase(deleteUser.pending, (state, { meta }) => {
      state.deleteRunning.loading = true;
      state.deleteRunning.id = meta.arg;
    });
    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      state.deleteRunning.loading = false;
      state.deleteRunning.id = null;
      state.Users.data;
      if (state.Users.data) {
        state.Users.data = state.Users.data.filter(
          (user) => user._id != payload
        );
      }
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.deleteRunning.loading = true;
      state.deleteRunning.id = null;
    });

    // update user by admin
    builder.addCase(updateUser.pending, (state, { meta }) => {
      state.editRunning.loading = true;
      state.editRunning.id = meta.arg._id;
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      if (state.Users.data) {
        let index = state.Users.data.findIndex(
          (user) => user._id === payload.data._id
        );
        state.Users.data[index] = {
          ...state.Users.data[index],
          ...payload.data,
        };
      }

      state.editRunning.loading = false;
      state.editRunning.id = null;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.editRunning.loading = true;
      state.editRunning.id = null;
    });
  },
});

export default UsersSlice.reducer;
