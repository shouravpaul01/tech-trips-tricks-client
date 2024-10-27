"use client";
import {
  getAllUsersReq,
  getSingleUserByIdReq,
  getSingleUserReq,
  updateActiveStatusReq,
  updateUserRoleReq,
} from "@/src/services/UserService";
import {
  TQueryArg,
  TUpdateActiveStatusQuery,
  TUpdateRoleQuery,
} from "@/src/types";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetAllUsers = ({ page }: { page: number }) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await getAllUsersReq({ page });
      if (res?.errorMessages?.length > 0) {
        toast.error("Post not found.");
      }
      return res.data;
    },
  });
};
export const useGetAllUsersForInfinete = ({
  limit,
  queryArgs,
}: {
  limit?: number;
  queryArgs: TQueryArg[];
}) => {
  return useInfiniteQuery({
    queryKey: ["find-users", limit, queryArgs],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await getAllUsersReq({
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
    enabled: queryArgs?.length > 0 && queryArgs[0]?.value.length > 0,
  });
};
export const useUpdateUserRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["UPDATE_USER_ROLE"],
    mutationFn: async (query: TUpdateRoleQuery) =>
      await updateUserRoleReq(query),
    onSuccess: (data) => {
      if (data?.status) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["users"] });
      }
      if (!!data?.errorMessages) {
        toast.success(data?.errorMessages[0]?.message);
      }
    },
  });
};
export const useUpdateUserActiveStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["UPDATE_USER_ACTIVE_STATUS"],
    mutationFn: async (query: TUpdateActiveStatusQuery) =>
      await updateActiveStatusReq(query),
    onSuccess: (data) => {
      if (data?.status) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["users"] });
      }
      if (!!data?.errorMessages) {
        toast.success(data?.errorMessages[0]?.message);
      }
    },
  });
};

export const useGetSingleUser = () => {
  return useQuery({
    queryKey: ["single-user"],
    queryFn: async () => {
      const res = await getSingleUserReq();

      return res?.data;
    },
  });
};
export const useGetSingleUserById = (userId:string) => {
  return useQuery({
    queryKey: ["single-user"],
    queryFn: async () => {
      const res = await getSingleUserByIdReq(userId);

      return res?.data;
    },
  });
};
