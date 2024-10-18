"use client";
import PostCard from "@/src/components/cards/PostCard";
import CommentForm from "@/src/components/form/comment/CommentForm";
import CommentDetails from "@/src/components/ui/Comment/CommentDetails";
import CommentLoading from "@/src/components/ui/CommentLoading";
import TTTZLoading from "@/src/components/ui/TTTZLoading";

import { useGetSinglePost } from "@/src/hooks/PostHook";

export default function PostDetailsPage({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;

  const { data: post, isLoading, isFetching } = useGetSinglePost(postId);

  if (isLoading && isFetching) {
    return <TTTZLoading className="h-screen" />;
  }
  return (
    <>
      <div className="relative md:px-4 py-3">
        <PostCard
          isModalShow={false}
          cardProps={{
            radius: "none",
            shadow: "none",
            classNames: { footer: "flex-col border-y" },
          }}
          post={post!}
        />
        <div className="mb-32">
          {post?.comments?.map((comment, index) => (
            <CommentDetails
              key={index}
              profileImage={post?.user?.profileImage}
              comment={comment}
            />
          ))}
          {!post && <CommentLoading />}
        </div>
      </div>

      <div className="w-full md:w-[862px] fixed  bottom-0  bg-white px-4 py-3 shadow-lg z-30">
        <CommentForm postId={post?._id!} />
      </div>
    </>
  );
}
