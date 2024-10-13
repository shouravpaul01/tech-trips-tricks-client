"use server"

import { FieldValues } from "react-hook-form";
import axiosInstance from "../../lid/AxiosInstance";
import { revalidateTag } from "next/cache";
import { TPost } from "@/src/types";
import envConfig from "@/src/config/envConfig";


export const getAllPost = async (
    page?: number,
    limit?:number
  ): Promise<{ status: string; message: string; data: TPost[] }> => {
    const fetchOption = {
      next: {
        tags: ["posts"],
      },
    };
    const res = await fetch(
      `${envConfig.baseApi}/posts?page=${page}&limit=${limit}`,
      fetchOption
    );
  
    return await res.json();
  };
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