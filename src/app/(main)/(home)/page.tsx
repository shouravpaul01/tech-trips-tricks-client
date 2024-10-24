"use client";

import PostCard from "@/src/components/cards/PostCard";
import InfiniteScroll from "react-infinite-scroll-component";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import { useGetAllPostsForInfinite } from "@/src/hooks/PostHook";
import { useSearchParams } from "next/navigation";
import { useGetSingleUser } from "@/src/hooks/UserHook";

const HomePage = () => {
  const { data: user } = useGetSingleUser();

  const searchParams = useSearchParams();
  const followingUserId = user?.following?.map((user) => user?._id) || [];
  const followersUserId = user?.followers?.map((user) => user?._id) || [];
  const categories =
    searchParams
      .get("categories")
      ?.split(",")
      .map((item) => ({ label: "category", value: item })) || [];
  const contentTypesQuery =
    searchParams
      .get("contentType")
      ?.split(",")
      .map((item) => ({ label: "type", value: item })) || [];
  const defaultContent = user?.isSubscribed
    ? [
        { label: "type", value: "Free" },
        { label: "type", value: "Premium" },
      ]
    : [{ label: "type", value: "Free" }];
  const contentTypeFilter =
    contentTypesQuery?.length > 0 ? contentTypesQuery : defaultContent;

  const filter = [...categories, ...contentTypeFilter];
  const limit = 2;

  const { data, hasNextPage, fetchNextPage, isLoading } =
    useGetAllPostsForInfinite({
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
              followersUserId={followersUserId}
              followingUserId={followingUserId}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
