"use client";
import { Button } from "@nextui-org/button";
import React, { useEffect, useRef, useState } from "react";
import {
  AddCommentkIcon,
  InfoIcon,
  PDFIcon,
  ThumbDownkIcon,
  ThumbUpkIcon,
} from "../../icons";
import { TPost } from "@/src/types";
import { UseDisclosureProps } from "@nextui-org/modal";
import getClientIp from "@/src/utils/getClientIp";
import { toast } from "sonner";
import { downvoteUpdate, upvoteUpdate } from "@/src/services/PostService";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import PrintPost from "../PrintPost";
import { useReactToPrint } from "react-to-print";

export default function CommentWithUpDownVotes({
  post,
  modalDisclosure,
}: {
  post: TPost;
  modalDisclosure?: UseDisclosureProps;
}) {
  const router = useRouter();

  const queryClient = useQueryClient();
  const [ipAddress, setIpAddress] = useState();
  useEffect(() => {
    const fetchIpAddress = async () => {
      const ip = await getClientIp();
      setIpAddress(ip);
    };

    fetchIpAddress();
  }, []);

  const handleUpvote = async (postId: string) => {
    if (!ipAddress) {
      toast.error("Network problem. Please refresh your window.");
    }
    const res = await upvoteUpdate({ ipAddress, postId });
    if (res?.data) {
      queryClient.invalidateQueries({ queryKey: ["single-posts"] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Sccessful");
    }
  };
  const handleDownvote = async (postId: string) => {
    const res = await downvoteUpdate({ ipAddress, postId });
    if (!ipAddress) {
      toast.error("Network problem. Please refresh your window.");
    }
    if (res?.data) {
      queryClient.invalidateQueries({ queryKey: ["single-posts"] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Sccessful");
    }
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="">
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
      <Button
        variant="light"
        color="secondary"
        size="sm"
        radius="full"
        className="text-sm"
        startContent={<InfoIcon />}
        onPress={() => router.push(`/details/${post?._id}`)}
      >
        Details
      </Button>

      <PrintPost post={post} />

      <div className="">
        {/* <p>10 Comments</p> */}
        <Button
          variant="light"
          color="secondary"
          size="sm"
          radius="full"
          className="text-sm"
          endContent={<AddCommentkIcon fill="#999999" />}
          onPress={modalDisclosure && modalDisclosure.onOpen}
        >
          {post?.comments?.length} Comments
        </Button>
      </div>
    </div>
  );
}
