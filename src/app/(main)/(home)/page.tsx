"use client";
import PostCard from "@/src/components/cards/PostCard";
import { getAllPost } from "../../services/PostService";
import InfiniteScroll from "react-infinite-scroll-component";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import { Button } from "@nextui-org/button";
import { RefreshIcon } from "@/src/components/icons";
import { useInfiniteQuery } from "@tanstack/react-query";

const HomePage = () => {
  const limit = 2;

  const { data, hasNextPage, fetchNextPage, refetch, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: async ({ pageParam = 1 }) => {
        const { data } = await getAllPost(pageParam, limit);
        return data;
      },
      getNextPageParam: (lastPage) => {
        // If lastPage is empty or its length is less than the limit, stop fetching
        if (!lastPage || lastPage?.data.length < limit) return undefined;
        return Number(lastPage.page) + 1;
      },
      initialPageParam: 1,
    });

  const refreshPosts = () => {
    refetch({});
  };
  const posts = data?.pages.flatMap((item) => item.data) || [];
console.log(posts,"posts")
  return (
    <div className="px-2 pt-2">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<TTTZLoading />}
        endMessage={
          <div className="flex justify-center mt-3">
            <Button isIconOnly radius="full" onPress={refreshPosts}>
              <RefreshIcon />
            </Button>
          </div>
        }
      >
        <div className="space-y-5">
          {posts?.map((post, index) => <PostCard key={index} post={post} />)}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
