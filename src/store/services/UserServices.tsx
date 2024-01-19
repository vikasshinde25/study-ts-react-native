import axiosInstance from "../../api/axios";
import { API_LOGIN } from "../../constants";

async function userLogin(loginData: { email: string; password: string }) {
  const payloadData = {
    email: loginData?.email,
    password: loginData?.password,
    google_id: "GA1.2.2132106479.1686759283",
  };
  const params = {
    customer: "",
  };
  const result = await axiosInstance
    .post(API_LOGIN, payloadData, {
      params,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return result;
}

export default userLogin;
