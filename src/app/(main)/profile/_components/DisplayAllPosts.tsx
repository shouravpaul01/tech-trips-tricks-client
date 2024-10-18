"use client";
import PostCard from "@/src/components/cards/PostCard";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import useGetAllPosts from "@/src/hooks/PostHook";
import InfiniteScroll from "react-infinite-scroll-component";

export default function DisplayAllPosts({ userId }: { userId: string }) {
  const limit = 2;
  const { data, hasNextPage, fetchNextPage, isLoading } = useGetAllPosts({
    limit: limit,
    queryArgs: [{ label: "user", value: userId }],
  });

  const posts = data?.pages.flatMap((item) => item.data) || [];
  return (
    <div className="pt-2">
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
          {posts?.map((post, index) => <PostCard cardProps={{
             className:"max-w-full",
             radius:"sm",
             shadow:"none",
             classNames:{base: "border",footer: "flex-col border-t"}}} key={index} post={post} />)}
        </div>
      </InfiniteScroll>
    </div>
  );
}
