"use server";

import { FieldValues } from "react-hook-form";
import axiosInstance from "../../lid/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const registerUser = async (bodyData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", bodyData);
    if (data?.status) {
      cookies().set("accessToken", data?.data?.accessToken);
    }
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
export const loginUser = async (bodyData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", bodyData);
    if (data?.status) {
      cookies().set("accessToken", data?.data?.accessToken);
    }
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
export const getCurrentuser = async() => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedResult = {};
  if (accessToken) {
    const decoded = await jwtDecode(accessToken);
    decodedResult = decoded;
  }
  return decodedResult;
};
