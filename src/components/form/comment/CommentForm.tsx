"use client";
import React from "react";
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

export default function CommentForm({postId}:{postId:string}) {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const {
    mutate: handleCreateComment,
    isPending,
  
  } = useMutation({
    mutationKey: ["COMMENT"],
    mutationFn: async (data: FieldValues) => await createComment(data),
    onSuccess: (data) => {
    console.log(data)
      if (data?.status) {
        queryClient.invalidateQueries({ queryKey: ['single-posts'] })
        queryClient.invalidateQueries({ queryKey: ['posts'] })
        toast.success(data.message)
      }
      if (!!data?.errorMessages) {
       
      }
    },
  });
  const handleComment: SubmitHandler<FieldValues> = (data) => {
    data.post=postId
    data.user=user?._id
    console.log(data);
    handleCreateComment(data)
  };
  return (
    <div className="flex gap-1">
      <div>
        <Avatar src={user?.profileImage} />
      </div>
      <div className="w-full">
        <TTTForm onSubmit={handleComment}>
          <TTTZTextArea name="text" textAreaProps={{ variant: "faded" }}  />
          <div className="text-right mt-1">
            <Button type="submit" isIconOnly color="secondary" size="sm">
              <CommentSendkIcon fill="#FFFFFF" />
            </Button>
          </div>
        </TTTForm>
      </div>
    </div>
  );
}
