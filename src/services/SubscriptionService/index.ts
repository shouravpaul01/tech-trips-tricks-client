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