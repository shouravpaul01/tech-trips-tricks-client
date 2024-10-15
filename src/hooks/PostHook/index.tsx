import { getAllPost } from "@/src/app/services/PostService";
import { useInfiniteQuery } from "@tanstack/react-query";


export default function useGetAllPosts({limit,queryArgs}:{limit?:number,queryArgs?:string[]}) {
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

