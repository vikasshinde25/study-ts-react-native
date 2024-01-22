import { createSlice } from "@reduxjs/toolkit";

import customerDetails from "../services/CustomerServices";

const initialState = { customerData: null };

const CustomerSlice = createSlice({
  name: "customerState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // customer state reducer
    builder.addCase(customerDetails.fulfilled, (state, action) => {
      const customerState = state;
      customerState.customerData = action?.payload?.data;
    });
    builder.addCase(customerDetails.rejected, (state) => {
      const customerState = state;
      customerState.customerData = null;
    });
  },
});

export default CustomerSlice.reducer;
