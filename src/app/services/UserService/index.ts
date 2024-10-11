"use server";

import envConfig from "@/src/config/envConfig";
import { TUser } from "@/src/types";
import { FieldValues } from "react-hook-form";
import axiosInstance from "../../lid/AxiosInstance";
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
