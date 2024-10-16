"use client"

import { createPost, getAllPost, getSinglePost, updatePost } from "@/src/services/PostService";
import { TErrorMessage, TQueryArg } from "@/src/types";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export  const useCreatePost=(onClose: () => void, 
setErrors: (errors: TErrorMessage[]) => void)=> {
  return   useMutation({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (data: FieldValues) => await createPost(data),
    onSuccess: (data) => {
      if (data?.status) {
        onClose();
        toast.success(data?.message);
      }
      if (!!data?.errorMessages) {
        setErrors([...data?.errorMessages]);
      }
    },
  });
};
export default function useGetAllPosts({limit,queryArgs}:{limit?:number,queryArgs?:TQueryArg[]}) {
  return useInfiniteQuery({
    queryKey: ["posts",limit,queryArgs],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await getAllPost({page:pageParam,limit:limit,queryArgs});
      return data;
    },
    getNextPageParam: (lastPage) => {
      // Stop fetching if the last page is empty or the length is less than the limit
      if (!lastPage || lastPage?.data.length < limit!) return undefined;
      return Number(lastPage.page) + 1;
    },
    initialPageParam: 1,
  });
};

export  const useGetSinglePost=(postId:string)=> {
  const queryClient=useQueryClient()
  return  useQuery({
    queryKey: ["single-posts", postId],
    queryFn: async () => {
      const res = await getSinglePost(postId);
      if (res?.errorMessages?.length > 0) {
        toast.error("Post not found.");
        queryClient.invalidateQueries({queryKey:["posts"]})
      }
      return res.data;
    },
    enabled: !!postId,
  });
};
export  const useUpdatePost=(
setErrors: (errors: TErrorMessage[]) => void)=> {
  const queryClient=useQueryClient()
  return   useMutation({
    mutationKey: ["UPDATE_POST"],
    mutationFn: async (data: FieldValues) => await updatePost(data),
    onSuccess: (data) => {
     
      if (data?.status) {
       
        toast.success(data?.message);
        queryClient.invalidateQueries({queryKey:["posts"]})
      }
      if (!!data?.errorMessages) {
        setErrors([...data?.errorMessages]);
      }
    },
  });
};