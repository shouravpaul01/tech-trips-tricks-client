import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import { AddCommentkIcon, ThumbDownkIcon, ThumbUpkIcon } from "../../icons";
import { TPost } from "@/src/types";
import { UseDisclosureProps } from "@nextui-org/modal";
import getClientIp from "@/src/app/utils/getClientIp";
import { toast } from "sonner";
import { upvoteUpdate } from "@/src/app/services/PostService";

export default function CommentWithUpDownVotes({
  post,
  modalDisclosure,
}: {
  post: TPost;
  modalDisclosure?: UseDisclosureProps;
}) {
  const [ipAddress, setIpAddress] = useState();
  useEffect(() => {
    const fetchIpAddress = async () => {
      const ip = await getClientIp();
      setIpAddress(ip);
    };

    fetchIpAddress();
  }, []);

  console.log(ipAddress, "dd");
  const handleUpvote = async (postId: string) => {
    if (!ipAddress) {
      toast.error("Network problem.Refresh you window.");
    }
    const res = await upvoteUpdate({ ipAddress, postId });
    if (res?.data) {
    }
    console.log(res);
  };
  const handleDownvote = async (postId: string) => {
    console.log(ipAddress, postId);
  };
  return (
    <div className="flex items-center w-full">
      <div className="flex-1">
        <Button
          isIconOnly
          variant="light"
          color="secondary"
          radius="full"
          onPress={() => handleUpvote(post?._id!)}
        >
          <ThumbUpkIcon
            fill={
              post?.isUpvotedIP?.includes(ipAddress!) ? "#EA33F7" : "#999999"
            }
          />
        </Button>
        <Button
          isIconOnly
          variant="light"
          color="secondary"
          radius="full"
          onPress={() => handleDownvote(post?._id!)}
        >
          <ThumbDownkIcon
            fill={
              post?.isDownvotedIP?.includes(ipAddress!) ? "#EA33F7" : "#999999"
            }
          />
        </Button>
      </div>
      <div className="">
        {/* <p>10 Comments</p> */}
        <Button
          variant="light"
          color="secondary"
          size="sm"
          radius="full"
          endContent={<AddCommentkIcon fill="#999999" />}
          onPress={modalDisclosure && modalDisclosure.onOpen}
        >
          {post?.comments?.length} Comments
        </Button>
      </div>
    </div>
  );
}
