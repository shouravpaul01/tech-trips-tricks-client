"use server";

import { FieldValues } from "react-hook-form";
import axiosInstance from "@/src/lib/AxiosInstance";



export const createSubscription = async (bodyData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/subscriptions/create-subscription`, bodyData);
    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
}
export const getMonthlyPaymentsReq = async () => {
  try {
    const { data } = await axiosInstance.get(`/subscriptions/monthly-payments`);
    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
}