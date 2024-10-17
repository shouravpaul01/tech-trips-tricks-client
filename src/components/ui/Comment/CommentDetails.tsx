"use client";
import { blankImage } from "@/src/constent";
import { TComment } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { ThumbDownkIcon, ThumbUpkIcon } from "../../icons";
import { useEffect, useState } from "react";
import getClientIp from "@/src/utils/getClientIp";
import { toast } from "sonner";
import {
  downvoteUpdateComment,
  upvoteUpdateComment,
} from "@/src/services/CommentService";
import { useQueryClient } from "@tanstack/react-query";
import CommentViewAndEditAndDelete from "./CommentViewAndEditAndDelete";

export default function CommentDetails({
  profileImage,
  comment,
}: {
  profileImage: string;
  comment: TComment;
}) {
  const queryClient = useQueryClient();
  const [ipAddress, setIpAddress] = useState();
  useEffect(() => {
    const fetchIpAddress = async () => {
      const ip = await getClientIp();
      setIpAddress(ip);
    };

    fetchIpAddress();
  }, []);
  const handleUpvote = async (commentId: string) => {
    if (!ipAddress) {
      toast.error("Network problem. Please refresh your window.");
    }
    const res = await upvoteUpdateComment({ ipAddress, commentId });

    if (res?.data) {
      queryClient.invalidateQueries({ queryKey: ["single-posts"] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });

      toast.success("Sccessful");
    }
  };
  const handleDownvote = async (commentId: string) => {
    const res = await downvoteUpdateComment({ ipAddress, commentId });
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
      <div className="flex gap-2 mt-2">
        <div>
          <Avatar src={profileImage || blankImage} />
        </div>
        <div>
          <CommentViewAndEditAndDelete comment={comment} />

          <Button
            isIconOnly
            variant="light"
            color="secondary"
            radius="full"
            size="sm"
            onPress={() => handleUpvote(comment?._id!)}
          >
            <ThumbUpkIcon
              fill={
                comment?.isUpvotedIP?.includes(ipAddress!)
                  ? "#EA33F7"
                  : "#999999"
              }
            />
          </Button>
          <Button
            isIconOnly
            variant="light"
            color="secondary"
            radius="full"
            size="sm"
            onPress={() => handleDownvote(comment?._id!)}
          >
            <ThumbDownkIcon
              fill={
                comment?.isDownvotedIP?.includes(ipAddress!)
                  ? "#EA33F7"
                  : "#999999"
              }
            />
          </Button>
        </div>
      </div>
    </>
  );
}
