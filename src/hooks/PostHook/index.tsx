"use client";

import {
  createPost,
  deletePostReq,
  getAllPost,
  getSinglePost,
  removeImageFromPost,
  restorePostReq,
  updatePost,
} from "@/src/services/PostService";
import { TErrorMessage, TQueryArg } from "@/src/types";
import {
  
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreatePost = (
  onClose: () => void,
  setErrors: (errors: TErrorMessage[]) => void
) => {
  const queryClient=useQueryClient()
  return useMutation({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (data: FieldValues) => await createPost(data),
    onSuccess: (data) => {
      if (data?.status) {
        onClose();
        toast.success(data?.message);
        queryClient.invalidateQueries({queryKey:["posts",3,[]]})
      }
      if (!!data?.errorMessages) {
        setErrors([...data?.errorMessages]);
      }
    },
    
  });
};
export  function useGetAllPostsForInfinite({
  limit,
  queryArgs,
}: {
  limit?: number;
  queryArgs?: TQueryArg[];
}) {
  return useInfiniteQuery({
    queryKey: ["posts", limit, queryArgs],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await getAllPost({
        page: pageParam,
        limit: limit,
        queryArgs,
      });
      return data;
    },
    getNextPageParam: (lastPage) => {
      // Stop fetching if the last page is empty or the length is less than the limit
      if (!lastPage || lastPage?.data.length < limit!) return undefined;
      return Number(lastPage.page) + 1;
    },
    initialPageParam: 1,
  });
}
export  const useGetAllPosts=({
  page,
  limit,
  queryArgs,
}: {
  page?:number;
  limit?: number;
  queryArgs?: TQueryArg[];
}) =>{
  return useQuery({
    queryKey: ["allPosts",page,queryArgs],
    queryFn: async () => {
      const res = await getAllPost({
        page: page!,
        limit: limit,
        queryArgs,
      });
      
      return res.data;
    },

  });
}
export const useGetSinglePost = (postId: string) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["single-posts", postId],
    queryFn: async () => {
      const res = await getSinglePost(postId);
      if (res?.errorMessages?.length > 0) {
        toast.error("Post not found.");
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      }
      return res.data;
    },
    enabled: !!postId,
  });
};
export const useUpdatePost = (setErrors: (errors: TErrorMessage[]) => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["UPDATE_POST"],
    mutationFn: async (data: FieldValues) => await updatePost(data),
    onSuccess: (data) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        queryClient.invalidateQueries({
          queryKey: ["single-posts", data.data._id],
        });
      }
      if (!!data?.errorMessages) {
        setErrors([...data?.errorMessages]);
      }
    },
  });
};
export const useRemoveImageFromPost = (
  setErrors: (errors: TErrorMessage[]) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["REMOVE_IMAGE"],
    mutationFn: async (data: FieldValues) => await removeImageFromPost(data),
    onSuccess: (data) => {
      console.log(data);
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        queryClient.invalidateQueries({
          queryKey: ["single-posts", data.data._id],
        });
      }
      if (!!data?.errorMessages) {
        setErrors([...data?.errorMessages]);
      }
    },
  });
};
export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["DELETE_POST"],
    mutationFn: async (postId: string) => await deletePostReq(postId),
    onSuccess: (data) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        queryClient.invalidateQueries({ queryKey: ["allPosts"] });
        queryClient.invalidateQueries({
          queryKey: ["single-posts", data.data._id],
        });
      }
      if (!!data?.errorMessages) {
      }
    },
  });
};
export const useRestorePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["RESTORE_POST"],
    mutationFn: async (postId: string) => await restorePostReq(postId),
    onSuccess: (data) => {
      if (data?.status) {
        toast.success(data?.message);
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        queryClient.invalidateQueries({ queryKey: ["allPosts"] });
        queryClient.invalidateQueries({
          queryKey: ["single-posts", data.data._id],
        });
      }
      if (!!data?.errorMessages) {
      }
    },
  });
};
