import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../axios";

import { API_CUSTOMER } from "../../constants";

// create async thunk for get customer details
const customerDetails = createAsyncThunk(
  "customerState",
  async (id: string) => {
    return axiosInstance
      .get(`${API_CUSTOMER + id}/`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        const errorMessage = error?.response;
        return errorMessage;
      });
  }
);

export default customerDetails;
