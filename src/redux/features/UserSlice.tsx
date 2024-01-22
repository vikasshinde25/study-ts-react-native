import { createSlice } from "@reduxjs/toolkit";

import { userLogin, userLogout, userMe } from "../services/UserServices";

const initialState = { isLoggedIn: false, userData: null, error: null };

const UserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login reducer
    builder.addCase(userLogin.fulfilled, (state, action) => {
      const userState = state;
      userState.isLoggedIn = true;
      userState.userData = action?.payload?.data?.user;
      userState.error = null;
    });
    builder.addCase(userLogin.rejected, (state) => {
      const userState = state;
      userState.isLoggedIn = false;
      userState.userData = null;
      // userState.error = action?.payload;
    });
    // logout reducer
    builder.addCase(userLogout.fulfilled, (state) => {
      const userState = state;
      userState.isLoggedIn = false;
      userState.userData = null;
      userState.error = null;
    });
    // user me reducer
    builder.addCase(userMe.fulfilled, (state, action) => {
      const userState = state;
      userState.isLoggedIn = true;
      userState.userData = action?.payload?.data;
      userState.error = null;
    });
  },
});

export default UserSlice.reducer;
