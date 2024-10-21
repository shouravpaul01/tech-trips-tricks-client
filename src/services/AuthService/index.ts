"use server";

import { FieldValues } from "react-hook-form";
import axiosInstance from "@/src/lib/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { TCurrentUser } from "@/src/types";

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
export const isExistsUserId = async (query: FieldValues) => {
  try {
    const { data } = await axiosInstance.get(`/users/checked-userId?email=${query?.email}&userId=${query?.userId}`);
  
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
export const updateUserId = async (bodyData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(`/users/update-userId?email=${bodyData?.email}`, {userId:bodyData?.userId});
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
  let decodedResult:Partial<TCurrentUser>= {};
  if (accessToken) {
    const decoded:TCurrentUser = await jwtDecode(accessToken);
    decodedResult = decoded;
  }
  return decodedResult;
};
export const logoutUser = async() => {
  return cookies().delete("accessToken");
  
};
export const changePasswordReq = async (bodyData:FieldValues) => {
  try {
    const { data } = await axiosInstance.patch("/auth/change-password",bodyData);

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};