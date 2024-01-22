import axios from "axios";
import { Platform } from "react-native";
import { REACT_APP_API_VERSION, REACT_APP_BASE_APP_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NON_AUTHORIZATION_APIS } from "./constants";

const appBaseURL = REACT_APP_BASE_APP_URL;
const appApiVersion = REACT_APP_API_VERSION;

const axiosInstance = axios.create({
  baseURL: appBaseURL + appApiVersion,
});

// get token from async storage
const getTokenFromAsynStorage = async () => {
  const token = await AsyncStorage.getItem("token");
  return token;
};

// Add a request interceptor
axiosInstance.interceptors.request.use((request) => {
  if (!NON_AUTHORIZATION_APIS.includes(request?.url || "")) {
    let token = null;

    if (Platform.OS === "web") {
      token = localStorage.getItem("token");
    } else {
      token = getTokenFromAsynStorage();
    }

    request.headers!.Authorization = `Token ${token}`;
    return request;
  }
  return request;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
