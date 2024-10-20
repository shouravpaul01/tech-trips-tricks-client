"use client";
import React, { useState } from "react";
import TTTForm from "../TTTZForm";
import TTTZTextArea from "../TTTZTextarea";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUser } from "@/src/context/user.provider";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { CommentSendkIcon } from "../../icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "@/src/services/CommentService";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCommentValidation } from "@/src/validation/comment.validation";

export default function CommentForm({ postId }: { postId: string }) {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const [isResetForm,setIsResetForm]=useState(false)
  const { mutate: handleCreateComment } = useMutation({
    mutationKey: ["COMMENT"],
    mutationFn: async (data: FieldValues) => await createComment(data),
    onSuccess: (data) => {
      console.log(data);
      if (data?.status) {
        queryClient.invalidateQueries({ queryKey: ["single-posts"] });
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        toast.success(data.message);
        setIsResetForm(true)
      }
      if (!!data?.errorMessages) {
      }
    },
  });
  const handleComment: SubmitHandler<FieldValues> = (data) => {
    data.post = postId;
    data.user = user?._id;
    console.log(data);
    handleCreateComment(data);
  };
  return (
    <div className="flex gap-1">
      <div>
        <Avatar src={user?.profileImage} />
      </div>
      <div className="w-full">
        <TTTForm onSubmit={handleComment} resolver={zodResolver(createCommentValidation)} reset={isResetForm}>
          <TTTZTextArea
            name="text"
            textAreaProps={{
              variant: "faded",
              placeholder:"Write your comment...",
              endContent: (
                <div className="mt-auto">
                  <Button
                    type="submit"
                    isIconOnly
                    size="sm"
                    color="secondary"
                    className=""
                  >
                    <CommentSendkIcon fill="#FFFFFF" />
                  </Button>
                </div>
              ),
            }}
          />
        </TTTForm>
      </div>
    </div>
  );
}
