"use server";

import { FieldValues } from "react-hook-form";
import axiosInstance from "@/src/lib/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { TCurrentUser, TResetDetails } from "@/src/types";
import { redirect } from "next/navigation";

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
    const { data } = await axiosInstance.get(
      `/users/checked-userId?email=${query?.email}&userId=${query?.userId}`
    );

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
export const updateUserId = async (bodyData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(
      `/users/update-userId?email=${bodyData?.email}`,
      { userId: bodyData?.userId }
    );
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
export const getCurrentuser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedResult: Partial<TCurrentUser> = {};
  if (accessToken) {
    const decoded: TCurrentUser = await jwtDecode(accessToken);
    decodedResult = decoded;
  }
  return decodedResult;
};
export const logoutUser = async () => {
  return cookies().delete("accessToken");
};
export const changePasswordReq = async (bodyData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(
      "/auth/change-password",
      bodyData
    );

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
export const sendOTPReq = async (email: string) => {
  try {
    const { data } = await axiosInstance.patch(`/auth/send-otp?email=${email}`);
    if (data?.status) {
      cookies().set("resetPasswordToken", data?.data?.resetPasswordToken);
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
export const getResetDetails = async () => {
  const resetPasswordToken = cookies().get("resetPasswordToken")?.value;
  let decodedResult: Partial<TResetDetails> = {};
  if (resetPasswordToken) {
    const decoded: TResetDetails = await jwtDecode(resetPasswordToken);
    decodedResult = decoded;
  }
  return decodedResult;
};
export const matchedOTPReq = async (bodyData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/auth/matched-otp`, bodyData);
    if (data?.status) {
      cookies().set("resetPasswordToken", data?.data?.resetPasswordToken);
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
export const resetPasswordReq = async (bodyData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(
      `/auth/reset-password`,
      bodyData
    );
    if (data?.status) {
      cookies().delete("resetPasswordToken");
    }

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
export const cencelResetPasswordProcces = async () => {
  cookies().delete("resetPasswordToken");
  redirect("/login");
};
