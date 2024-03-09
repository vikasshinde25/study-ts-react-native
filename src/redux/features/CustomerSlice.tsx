import { createSlice } from "@reduxjs/toolkit";

import customerDetails from "../services/CustomerServices";

const initialState = { isLoading: false, customerData: null, error: null };

const CustomerSlice = createSlice({
  name: "customerState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // customer state reducer
    builder.addCase(customerDetails.pending, (state, action) => {
      console.warn("action", action);
      const customerState = state;
      customerState.isLoading = true;
      customerState.error = null;
    });
    builder.addCase(customerDetails.fulfilled, (state, action) => {
      console.warn("action", action);

      const customerState = state;
      customerState.customerData = action?.payload?.data;
      customerState.isLoading = false;
      customerState.error = null;
    });
    builder.addCase(customerDetails.rejected, (state, action) => {
      console.warn("action", action);
      const customerState = state;
      customerState.isLoading = false;
      customerState.error = null;
    });
  },
});

export default CustomerSlice.reducer;
