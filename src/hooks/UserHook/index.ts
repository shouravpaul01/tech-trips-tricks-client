"use client"
import {  getAllUsersReq, updateUserRoleReq } from "@/src/services/UserService";
import { TUpdateRoleQuery } from "@/src/types";
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
        console.log(data)
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