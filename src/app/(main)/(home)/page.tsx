"use client";
import PostCard from "@/src/components/cards/PostCard";
import { getAllPost } from "../../services/PostService";
import InfiniteScroll from "react-infinite-scroll-component";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import { Button } from "@nextui-org/button";
import { RefreshIcon } from "@/src/components/icons";
import { useInfiniteQuery } from "@tanstack/react-query";
import useGetAllPosts from "@/src/hooks/PostHook";
import { useSearchParams } from "next/navigation";

const HomePage = () => {
  const searchParams = useSearchParams();
  const categories = searchParams.get("categories")?.split(",");

  const limit = 2;

  const { data, hasNextPage, fetchNextPage, refetch, isLoading } =
    useGetAllPosts({ limit: limit, queryArgs: categories });

  const refreshPosts = () => {
    refetch({});
  };
  const posts = data?.pages.flatMap((item) => item.data) || [];
  isLoading && <TTTZLoading />;

  return (
    <div className="px-2 pt-2">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<TTTZLoading />}
        endMessage={
          isLoading ? (
            <TTTZLoading />
          ) : (
            <p className="text-sm text-gray-500 font-semibold text-center mt-3">
              No More
            </p>
          )
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
