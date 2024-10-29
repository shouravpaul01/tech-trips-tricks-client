"use server";

import { FieldValues } from "react-hook-form";
import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { TErrorMessage, TPost, TQueryArg } from "@/src/types";
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
export const getAllPost = async ({
  page,
  limit,
  queryArgs,
}: {
  page: number;
  limit?: number;
  queryArgs?: TQueryArg[];
}): Promise<{
  status: string;
  message: string;
  data: { data: TPost[]; page: number,totalPages:number };
  errorMessages:TErrorMessage[]
}> => {
 
  const params = new URLSearchParams();
  
  limit && params.append("limit", JSON.stringify(limit));
  page && params.append("page", JSON.stringify(page));
  
  if (queryArgs?.length! > 0) {
    queryArgs?.forEach((arg: any) => {
      if (!!arg?.value) {
        params.append(arg.label, arg.value)
      }
      
    });
  }
  const res = await fetch(`${envConfig.baseApi}/posts?${params}`, {
    cache: "no-store",
  });

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
  console.log(postId, "server");
  const res = await fetch(`${envConfig.baseApi}/posts/single-post/${postId}`, {
    cache: "no-store",
  });

  return await res.json();
};
export const updatePost = async (updateData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(
      `/posts/update-post/${updateData.postId}`,
      updateData.data
    );
    revalidateTag("posts");
    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const removeImageFromPost = async (updateData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(
      `/posts/remove-image/?postId=${updateData.postId}&image=${updateData.image}`
    );
    revalidateTag("posts");
    return data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
export const deletePostReq = async (postId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/posts/delete-post/${postId}`);

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
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
export const restorePostReq = async (postId: string) => {
  try {
    const { data } = await axiosInstance.patch(`/posts/restore-post/${postId}`);

    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
