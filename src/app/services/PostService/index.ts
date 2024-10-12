"use server"

import { FieldValues } from "react-hook-form";
import axiosInstance from "../../lid/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createPost = async (bodyData: FieldValues) => {
    console.log(bodyData, "bodydata");
    try {
      const { data } = await axiosInstance.post(
        `/posts/create-post`,
        bodyData
      );
      revalidateTag("Posts");
      return data;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data;
    }
  };