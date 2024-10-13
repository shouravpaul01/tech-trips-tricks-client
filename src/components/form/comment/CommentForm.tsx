"use client"
import React from "react";
import TTTForm from "../TTTZForm";
import TTTZTextArea from "../TTTZTextarea";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUser } from "@/src/context/user.provider";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { CommentSendkIcon } from "../../icons";

export default function CommentForm() {
    const {user}=useUser()
    console.log(user)
  const handleComment:SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex gap-1">
           <div>
           <Avatar src={user?.profileImage} />
           </div>
        <div className="w-full">
        <TTTForm onSubmit={handleComment}>
      <TTTZTextArea name="text" textAreaProps={{variant:"bordered"}}/>
      <div className="text-right mt-1">
      <Button isIconOnly  color="secondary" size="sm"><CommentSendkIcon fill="#FFFFFF"/></Button>
      </div>
    </TTTForm>
        </div>
    </div>
  );
}
