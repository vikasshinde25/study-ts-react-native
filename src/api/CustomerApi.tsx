import axiosInstance from "../axios";

import { API_CUSTOMER } from "../constants";

export async function getCustomerData(customerId: string) {
  const params = {
    customer: customerId,
  };
  const result = await axiosInstance
    .get(API_CUSTOMER, { params })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return result;
}
