"use client";

import PostCard from "@/src/components/cards/PostCard";
import InfiniteScroll from "react-infinite-scroll-component";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import {useGetAllPostsForInfinite} from "@/src/hooks/PostHook";
import { useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/user.provider";


const HomePage = () => {
  const {user}=useUser()
  const searchParams = useSearchParams();
  const categories = searchParams
    .get("categories")
    ?.split(",")
    .map((item) => ({ label: "category", value: item })) || [];
  const contentTypes = searchParams
    .get("contentType")
    ?.split(",")
    .map((item) => ({ label: "type", value: item })) || [];
  const filter = [...categories, ...contentTypes];
  const limit = 2;

  const { data, hasNextPage, fetchNextPage, isLoading } = useGetAllPostsForInfinite({
    limit: limit,
    queryArgs: filter,
  });

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
          {posts?.map((post, index) => (
            <PostCard
              cardProps={{
                className: "max-w-full",
                radius: "sm",
                shadow: "none",
                classNames: { base: "border", footer: "flex-col border-t" },
              }}
              key={index}
              post={post}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
