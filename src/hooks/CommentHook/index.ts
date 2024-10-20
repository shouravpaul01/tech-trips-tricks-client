"use client"

import { deleteComment, updateComment } from "@/src/services/CommentService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export  const useUpdateComment=(setIsCommentEdit:(value:boolean)=>void)=> {
    const queryClient=useQueryClient()
  return   useMutation({
    mutationKey: ["UPDATE_COMMENT"],
    mutationFn: async (data: FieldValues) => await updateComment(data),
    onSuccess: (data) => {
      if (data?.status) {
       queryClient.invalidateQueries({queryKey:["single-posts"]})
       queryClient.invalidateQueries({queryKey:["posts"]})
       setIsCommentEdit(false)
        toast.success(data?.message);

      }
      if (!!data?.errorMessages) {
        
      }
    },
  });
};
export  const useDeleteComment=()=> {
    const queryClient=useQueryClient()
  return   useMutation({
    mutationKey: ["UPDATE_COMMENT"],
    mutationFn: async (commentId: string) => await deleteComment(commentId),
    onSuccess: (data) => {
      if (data?.status) {
       queryClient.invalidateQueries({queryKey:["single-posts"]})
       queryClient.invalidateQueries({queryKey:["posts"]})
      
        toast.success(data?.message);

      }
      if (!!data?.errorMessages) {
        
      }
    },
  });
};