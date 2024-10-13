"use server";

import { FieldValues } from "react-hook-form";
import axiosInstance from "../../lid/AxiosInstance";
import { revalidateTag } from "next/cache";
import { TErrorMessage, TPost } from "@/src/types";
import envConfig from "@/src/config/envConfig";

export const getAllPost = async (
  page?: number,
  limit?: number
): Promise<{ status: string; message: string; data: TPost[] }> => {
  console.log("object");
 
  const res = await fetch(
    `${envConfig.baseApi}/posts?page=${page}&limit=${limit}`,
    {
      next: {
        tags: ["posts"],
      }
    }
  );

  return await res.json();
};
export const getSinglePost = async (
  postId: string
): Promise<{
  status: string;
  message: string;
  data: TPost[];
  errorMessages: TErrorMessage[];
}> => {
  const fetchOption = {
    next: {
      tags: ["single-posts"],
    },
  };
  console.log(postId);
  const res = await fetch(
    `${envConfig.baseApi}/posts/single-post/${postId}`,
    {
      next: {
        tags: ["single-posts"],
      },
      cache:"no-store"
    }
  );

  return await res.json();
};
export const createPost = async (bodyData: FieldValues) => {
  console.log(bodyData, "bodydata");
  try {
    const { data } = await axiosInstance.post(`/posts/create-post`, bodyData);
    revalidateTag("Posts");
    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
