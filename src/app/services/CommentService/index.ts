"use server"

import { FieldValues } from "react-hook-form";
import axiosInstance from "../../lid/AxiosInstance";
import { revalidateTag } from "next/cache";
import envConfig from "@/src/config/envConfig";



export const createComment = async (bodyData: FieldValues) => {
    console.log(bodyData, "bodydata");
    try {
      const { data } = await axiosInstance.post(`/comments/create-comment`, bodyData);
      // revalidateTag("posts");
      // revalidateTag(["single-posts"]);

      return data;
    } catch (error: any) {
     
      return error?.response?.data;
    }
  };
  export const getAllComments = async (
    page?: number,
    limit?: number
  ): Promise<{ status: string; message: string; }> => {
  
   
    const res = await fetch(
      `${envConfig.baseApi}/comments?page=${page}&limit=${limit}`,
      {
        next: {
          tags: ["posts"],
        }
      }
    );
  
    return await res.json();
  };