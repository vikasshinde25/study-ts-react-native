import axios from "axios";

import { REACT_APP_API_VERSION, REACT_APP_BASE_APP_URL } from "@env";

import { NON_AUTHORIZATION_APIS } from "../constants";

const appBaseURL = REACT_APP_BASE_APP_URL;
const appApiVersion = REACT_APP_API_VERSION;

const axiosInstance = axios.create({
  baseURL: appBaseURL + appApiVersion,
});

// Add a request interceptor
axiosInstance.interceptors.request.use((request) => {
  if (!NON_AUTHORIZATION_APIS.includes(request?.url || "")) {
    let token = localStorage.getItem("token");
    token = token || "";
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
