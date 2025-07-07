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
import { useDisclosure, UseDisclosureProps } from "@nextui-org/modal";
import getClientIp from "@/src/utils/getClientIp";
import { toast } from "sonner";
import { downvoteUpdate, upvoteUpdate } from "@/src/services/PostService";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import PrintPost from "../PrintPost";
import { useReactToPrint } from "react-to-print";
import Link from "next/link";
import PostDetailsModal from "../../modals/PostDetailsModal";

export default function CommentWithUpDownVotes({
  post,
  isModalOpen = true,
}: {
  post: TPost;
  isModalOpen?: boolean;
}) {
  const [postId, setPostId] = useState<string>("");
  const [ipAddress, setIpAddress] = useState();
  const detailsDisclosure = useDisclosure();
  const queryClient = useQueryClient();

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
    <>
      <div className="flex justify-between items-center w-full">
        <div className="w-1/3 flex">
          
           <div className="flex items-center">
           {post?.isUpvotedIP?.length>0 && <span className="text-gray-500">{post?.isUpvotedIP?.length}</span>} 
             <Button
              isIconOnly
              variant="light"
              color="secondary"
              radius="full"
              onPress={() => handleUpvote(post?._id!)}
            >
              <ThumbUpkIcon
                fill={
                  post?.isUpvotedIP?.includes(ipAddress!)
                    ? "#EA33F7"
                    : "#999999"
                }
              />
            </Button>
           </div>
          
          <div className="flex items-center">
             {post?.isDownvotedIP?.length >0 && <span className="text-gray-500">{post?.isDownvotedIP?.length}</span>} 
               <Button
              isIconOnly
              variant="light"
              color="secondary"
              radius="full"
              onPress={() => handleDownvote(post?._id!)}
            >
              <ThumbDownkIcon
                fill={
                  post?.isDownvotedIP?.includes(ipAddress!)
                    ? "#EA33F7"
                    : "#999999"
                }
              />
            </Button>
          </div>
          
         
        </div>
        <div className="w-1/3 text-center">
          <Button
            href={`/details/${post?._id}`}
            as={Link}
            variant="light"
            color="secondary"
            size="sm"
            radius="full"
            className="text-sm"
            startContent={<InfoIcon />}
          >
            Details
          </Button>
        </div>

        <div className="w-1/3 text-end">
          <Button
            variant="light"
            color="secondary"
            size="sm"
            radius="full"
            className="text-sm"
            endContent={<AddCommentkIcon fill="#999999" />}
            isDisabled={!isModalOpen}
            onPress={() => {
              setPostId(post._id), detailsDisclosure.onOpen();
            }}
          >
            {post?.comments?.length > 0 && post?.comments?.length} Comments
          </Button>
        </div>
      </div>
      <PostDetailsModal Disclosure={detailsDisclosure} postId={postId} />
    </>
  );
}
