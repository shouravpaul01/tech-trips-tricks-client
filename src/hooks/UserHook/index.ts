"use client"
import {  getAllUsersReq, updateActiveStatusReq, updateUserRoleReq } from "@/src/services/UserService";
import { TUpdateActiveStatusQuery, TUpdateRoleQuery } from "@/src/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";


export  const useGetAllUsers=()=> {
    return  useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await getAllUsersReq();
        if (res?.errorMessages?.length > 0) {
          toast.error("Post not found.");
  
        }
        return res.data;
      },
      
    });
  };

  export  const useUpdateUserRole=()=> {
    const queryClient=useQueryClient()
    return useMutation({
      mutationKey: ["UPDATE_USER_ROLE"],
      mutationFn: async (query:TUpdateRoleQuery) =>
        await updateUserRoleReq(query),
      onSuccess: (data) => {
        
        if (data?.status) {
            toast.success(data.message);
            queryClient.invalidateQueries({queryKey:["users"]})
        }
        if (!!data?.errorMessages) {
          toast.success(data?.errorMessages[0]?.message);
        }
      },
    });
  }
  export  const useUpdateUserActiveStatus=()=> {
    const queryClient=useQueryClient()
    return useMutation({
      mutationKey: ["UPDATE_USER_ACTIVE_STATUS"],
      mutationFn: async (query:TUpdateActiveStatusQuery) =>
        await updateActiveStatusReq(query),
      onSuccess: (data) => {
       
        if (data?.status) {
            toast.success(data.message);
            queryClient.invalidateQueries({queryKey:["users"]})
        }
        if (!!data?.errorMessages) {
          toast.success(data?.errorMessages[0]?.message);
        }
      },
    });
  }