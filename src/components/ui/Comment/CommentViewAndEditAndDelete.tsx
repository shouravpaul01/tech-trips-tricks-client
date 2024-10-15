import { useUser } from "@/src/context/user.provider";
import { TComment } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import { MoreIcon } from "../../icons";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

export default function CommentViewAndEditAndDelete({
  comment,
}: {
  comment: TComment;
}) {
  const { user } = useUser();
  return (
    <div className="flex">
      <Card isBlurred={true} className="flex-1" >
        <CardBody className="max-w-xl"  >
          <p>{comment?.text}</p>
        </CardBody>
      </Card>
      {user?._id == comment?.user && (
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly variant="light" color="secondary" radius="full">
              {" "}
              <MoreIcon fill="#666666" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="new">Edit</DropdownItem>
            <DropdownItem key="copy">Delete </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  );
}
