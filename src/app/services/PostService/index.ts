"use server";

import { FieldValues } from "react-hook-form";
import axiosInstance from "../../lid/AxiosInstance";
import { revalidateTag } from "next/cache";
import { TErrorMessage, TPost, TQueryArg } from "@/src/types";
import envConfig from "@/src/config/envConfig";
import { param } from "lightgallery/plugins/video/lg-video-utils";

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
 {page,limit,queryArgs}:{ page:number,
  limit?: number,
  queryArgs?:string[]}
): Promise<{
  status: string;
  message: string;
  data: { data: TPost[]; page: number };
}> => {
  
  const params=new URLSearchParams()
 
  console.log(page,limit,queryArgs,'getAllPost1')
  limit && params.append("limit",JSON.stringify(limit))
  page && params.append("page",JSON.stringify(page))
  if (queryArgs?.length!>0) {
    queryArgs?.forEach((arg:any)=>params.append("category",arg))
  }
  const res = await fetch(
    `${envConfig.baseApi}/posts?${params}`,
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
