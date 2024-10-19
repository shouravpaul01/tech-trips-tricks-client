import { useUser } from "@/src/context/user.provider";
import { TComment } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React, { useState } from "react";
import {
  AddCommentkIcon,
  CommentSendkIcon,
  MoreIcon,
  XmarkIcon,
} from "../../icons";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import TTTForm from "../../form/TTTZForm";
import TTTZTextArea from "../../form/TTTZTextarea";
import { FieldValues, SubmitHandler } from "react-hook-form";
import TTTZInput from "../../form/TTTZInput";
import { useUpdateComment } from "@/src/hooks/CommentHook";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateCommentValidation } from "@/src/validation/comment.validation";

export default function CommentViewAndEditAndDelete({
  comment,
}: {
  comment: TComment;
}) {
  const { user } = useUser();
  const [isCommentEdit, setIsCommentEdit] = useState(false);
  const { mutate: updateComment } = useUpdateComment(setIsCommentEdit);
  const handleUpdateComment: SubmitHandler<FieldValues> = (fieldValues) => {
    console.log(fieldValues);
const updateData={
  commentId:fieldValues.commentId,
  data:{
    text:fieldValues.text
  }
}
console.log(updateData);
    updateComment(updateData);
  };
  return (
    <div className="flex items-center">
      <div className="flex-1 ">
        {isCommentEdit ? (
          <TTTForm
            onSubmit={handleUpdateComment}
            resolver={zodResolver(updateCommentValidation)}
            defaultValues={{ text: comment.text, commentId: comment._id }}
          >
            <div className="flex gap-2">
              <TTTZInput
                name="commentId"
                inputProps={{ className: "hidden" }}
              />
              <TTTZTextArea
                name="text"
                textAreaProps={{
                  label: `${comment.user.name}`,
                  labelPlacement: "outside",
                  readOnly: !isCommentEdit,
                  fullWidth: true,
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
                  className: "min-w-[400px]",
                }}
              />

              {isCommentEdit && (
                <div className="mt-7">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="flat"
                    color="danger"
                    onPress={() => setIsCommentEdit(false)}
                  >
                    <XmarkIcon fill="#00000" />
                  </Button>
                </div>
              )}
            </div>
          </TTTForm>
        ) : (
          <div>
            <span className="text-gray-600">{comment.user.name}</span>
            <Card isBlurred className="flex-1 bg-gray-200" shadow="none">
              <CardBody className="max-w-xl">
                <p>{comment?.text}</p>
              </CardBody>
            </Card>
          </div>
        )}
      </div>

      {!isCommentEdit && user?._id == comment?.user._id && (
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly variant="light" color="secondary" radius="full">
              {" "}
              <MoreIcon fill="#666666" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="new" onPress={() => setIsCommentEdit(true)}>
              Edit
            </DropdownItem>
            <DropdownItem key="copy">Delete </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  );
}
