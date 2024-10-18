"use server";

import envConfig from "@/src/config/envConfig";
import { TErrorMessage, TUpdateActiveStatusQuery, TUpdateRoleQuery, TUser } from "@/src/types";
import { FieldValues } from "react-hook-form";
import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const getSingleUserReq = async (
  userId: string
): Promise<{ status: string; message: string; data: TUser }> => {
  const fetchOption = {
    next: {
      tags: ["users"],
    },
  };
  const res = await fetch(
    `${envConfig.baseApi}/users/single-user/${userId}`,
    fetchOption
  );

  return await res.json();
};

export const updateUser = async (bodyData: FieldValues) => {
  console.log(bodyData, "bodydata");
  try {
    const { data } = await axiosInstance.patch(
      `/users/update-user/${bodyData?.userId}`,
      bodyData.formData
    );
    revalidateTag("users");
    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
  
};
export const getAllUsersReq = async (
): Promise<{ status: string; message: string; data: {data:TUser[],totalPages:number},errorMessages:TErrorMessage[] }> => {
  
  const {data} =  await axiosInstance.get(
    `/users`
  );

  return data;
};
export const updateUserRoleReq = async (query:TUpdateRoleQuery
): Promise<{ status: string; message: string; data:TUser[],errorMessages:TErrorMessage[] }> => {
  
  
  try {
    const {data} =  await axiosInstance.patch(
      `/users/update-role?email=${query.email}&role=${query.role}`
    );
    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }


};
export const updateActiveStatusReq = async (query:TUpdateActiveStatusQuery
): Promise<{ status: string; message: string; data:TUser[],errorMessages:TErrorMessage[] }> => {
  
  
  try {
    const {data} =  await axiosInstance.patch(
      `/users/update-active-status?email=${query.email}&isActive=${query.isActive}`
    );
    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }


};
