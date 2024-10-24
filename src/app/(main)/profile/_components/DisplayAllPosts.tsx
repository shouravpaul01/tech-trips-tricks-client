"use client";
import PostCard from "@/src/components/cards/PostCard";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import {useGetAllPostsForInfinite} from "@/src/hooks/PostHook";
import { useSearchParams } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";

export default function DisplayAllPosts({ userId }: { userId: string }) {
  const searchParams = useSearchParams();
  const categories = searchParams
    .get("categories")
    ?.split(",")
    .map((item) => ({ label: "category", value: item })) || [];
  const contentTypes = searchParams
    .get("contentType")
    ?.split(",")
    .map((item) => ({ label: "type", value: item })) || [{ label: "type", value: "Free" }];
  const filter = [{ label: "user", value: userId },...categories, ...contentTypes];
  const limit = 2;
  const { data, hasNextPage, fetchNextPage, isLoading } = useGetAllPostsForInfinite({
    limit: limit,
    queryArgs: filter,
  });
console.log(isLoading)
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
