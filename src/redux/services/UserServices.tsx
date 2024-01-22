import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axiosInstance from "../../axios";

import {
  API_LOGIN,
  API_LOGOUT,
  API_USER_ME,
  PATH_LOGIN,
} from "../../constants";
import { Platform } from "react-native";

// store the token in async storage
const storeTokenInAsync = async (token: string) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    return error;
  }
};

// delete async storage
const deleteAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    return error;
  }
};

// handle save storage activity
const handleSaveStorageActivity = (responseData: { token: string }) => {
  if (Platform.OS === "web") {
    localStorage.setItem("token", responseData?.token);
  } else {
    storeTokenInAsync(responseData?.token);
  }
};

// handle delete storage activity
const handleDeleteStorageActivity = () => {
  if (Platform.OS === "web") {
    localStorage.removeItem("token");
  } else {
    deleteAsyncStorage();
  }
};

// create async thunk for user login
export const userLogin = createAsyncThunk(
  "user/login",
  async (
    loginData: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    const payloadData = {
      email: loginData?.email,
      password: loginData?.password,
      google_id: "GA1.2.2132106479.1686759283",
    };
    const params = {
      customer: "",
    };
    return axiosInstance
      .post(API_LOGIN, payloadData, {
        params,
      })
      .then((response) => {
        if (response?.status === 200) {
          handleSaveStorageActivity(response?.data);
          return response;
        } else {
          handleDeleteStorageActivity();
        }

        return response;
      })
      .catch((error) => {
        handleDeleteStorageActivity();
        const errorMessage = error?.response;
        return thunkAPI.rejectWithValue(errorMessage);
      });
  }
);

// create async thunk for user logout
export const userLogout = createAsyncThunk("user/logout", async () => {
  return axiosInstance
    .post(API_LOGOUT, {})
    .then((response) => {
      if (response?.status === 204) {
        handleDeleteStorageActivity();

        // window.location.href = PATH_LOGIN;
        return response;
      }

      return response;
    })
    .catch((error) => {
      const errorMessage = error?.response;
      return errorMessage;
    });
});

// create async thunk for get user details
export const userMe = createAsyncThunk("user/me", async () => {
  return axiosInstance
    .get(API_USER_ME)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      const errorMessage = error?.response;
      return errorMessage;
    });
});
