"use server";

import { FieldValues } from "react-hook-form";
import axiosInstance from "../../lid/AxiosInstance";
import { revalidateTag } from "next/cache";
import { TErrorMessage, TPost } from "@/src/types";
import envConfig from "@/src/config/envConfig";

export const createPost = async (bodyData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/posts/create-post`, bodyData);
    revalidateTag("posts");
    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const getAllPost = async (
  page?: number,
  limit?: number
): Promise<{
  status: string;
  message: string;
  data: { data: TPost[]; page: number };
}> => {
  const res = await fetch(
    `${envConfig.baseApi}/posts?page=${page}&limit=${limit}`,
    {
      next: {
        tags: ["posts"],
      },
    }
  );

  return await res.json();
};
export const getSinglePost = async (
  postId: string
): Promise<{
  status: string;
  message: string;
  data: TPost;
  errorMessages: TErrorMessage[];
}> => {
  const res = await fetch(`${envConfig.baseApi}/posts/single-post/${postId}`, {
    next: {
      tags: ["single-posts"],
    },
  });

  return await res.json();
};
export const upvoteUpdate = async (updateData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(
      `/posts/upvote/${updateData.postId}?ipAddress=${updateData.ipAddress}`
    );

    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const downvoteUpdate = async (updateData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(
      `/posts/downvote/${updateData.postId}?ipAddress=${updateData.ipAddress}`
    );

    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
