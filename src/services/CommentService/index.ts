"use server"

import { FieldValues } from "react-hook-form";
import axiosInstance from "@/src/lib/AxiosInstance";
import envConfig from "@/src/config/envConfig";




export const createComment = async (bodyData: FieldValues) => {
    
    try {
      const { data } = await axiosInstance.post(`/comments/create-comment`, bodyData);
      // revalidateTag("posts");
      // revalidateTag(["single-posts"]);

      return data;
    } catch (error: any) {
     
      return error?.response?.data;
    }
  };
  export const updateComment = async (bodyData: FieldValues) => {
 
    try {
      const { data } = await axiosInstance.patch(`/comments/update-comment/${bodyData.commentId}`, bodyData.data);
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
  export const deleteComment = async (commentId: string) => {
 
    try {
      const { data } = await axiosInstance.delete(`/comments/delete-comment/${commentId}`);
     

      return data;
    } catch (error: any) {
     
      return error?.response?.data;
    }
  };
  export const upvoteUpdateComment = async (updateData: FieldValues) => {
    try {
      const { data } = await axiosInstance.patch(
        `/comments/upvote/${updateData.commentId}?ipAddress=${updateData.ipAddress}`
      );
  
      return data;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data;
    }
  };
  export const downvoteUpdateComment = async (updateData: FieldValues) => {
    try {
      const { data } = await axiosInstance.patch(
        `/comments/downvote/${updateData.commentId}?ipAddress=${updateData.ipAddress}`
      );
  
      return data;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data;
    }
  };