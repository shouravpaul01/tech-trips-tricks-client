"use server";

import envConfig from "@/src/config/envConfig";
import { TErrorMessage, TQueryArg, TUpdateActiveStatusQuery, TUpdateRoleQuery, TUser } from "@/src/types";
import { FieldValues } from "react-hook-form";
import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const getSingleUserReq = async (
  userId: string
): Promise<{ status: string; message: string; data: TUser }> => {
 
  const res = await fetch(
    `${envConfig.baseApi}/users/single-user/${userId}`,
    {cache:"no-store"}
  );

  return await res.json();
};

export const updateUser = async (bodyData: FieldValues) => {
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
export const getAllUsersReq = async ({
  page,
  limit,
  queryArgs,
}: {
  page: number;
  limit?: number;
  queryArgs?: TQueryArg[];
}): Promise<{ status: string; message: string; data: {data:TUser[],page:number,totalPages:number},errorMessages:TErrorMessage[] }> => {
  const params = new URLSearchParams();
  
  limit && params.append("limit", JSON.stringify(limit));
  page && params.append("page", JSON.stringify(page));
  console.log(queryArgs?.length, "queryArgs");
  if (queryArgs?.length! > 0) {
    queryArgs?.forEach((arg: any) => params.append(arg.label, arg.value));
  }
  const {data} =  await axiosInstance.get(
    `/users?${params}`
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
export const followingUserReq = async (followingUserId:string
): Promise<{ status: string; message: string; data:TUser[],errorMessages:TErrorMessage[] }> => {
  
  
  try {
    const {data} =  await axiosInstance.patch(
      `/users/following/${followingUserId}`
    );
    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }


};
