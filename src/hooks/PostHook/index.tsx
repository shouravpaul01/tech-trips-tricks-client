"use client"

import { getAllPost, getSinglePost } from "@/src/services/PostService";
import { TQueryArg } from "@/src/types";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";


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
  return  useQuery({
    queryKey: ["single-posts", postId],
    queryFn: async () => {
      const res = await getSinglePost(postId);
      if (res?.errorMessages?.length > 0) {
        toast.error("Post not found.");

      }
      return res.data;
    },
    enabled: !!postId,
  });
};