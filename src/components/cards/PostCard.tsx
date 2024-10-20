"use client";
import { noImage } from "@/src/constent";
import { TPost } from "@/src/types";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from "@nextui-org/card";
import Image from "next/image";
import CommentWithUpDownVotes from "../ui/Comment/CommentWithUpDownVotes";
import { useDisclosure } from "@nextui-org/modal";
import PostDetailsModal from "../modals/PostDetailsModal";
import { DeleteIcon, EditIcon, MoreIcon, PremiumIcon } from "../icons";
import ImageGallery from "../ui/Post/ImageGallery";
import PostContentText from "../ui/Post/PostContentText";
import { Button } from "@nextui-org/button";
import { useUser } from "@/src/context/user.provider";
import CreatePostModal from "../modals/CreatePostModal";
import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useDeletePost } from "@/src/hooks/PostHook";

export default function PostCard({
  cardProps,
  isModalShow = true,
  post,
}: {
  cardProps: CardProps;
  isModalShow?: boolean;
  post: TPost;
}) {
  const editModalDisclosure = useDisclosure();
  const detailModalDisclosure = useDisclosure();
  const { user } = useUser();
  const [postId, setPostId] = useState<string>("");
  const {mutate:handleDeletePost}=useDeletePost()
  return (
    <>
      <Card {...cardProps}>
        <CardHeader className="justify-between p-0">
          <div className="flex gap-3 p-3">
            <Image
              alt="nextui logo"
              height={40}
              className="rounded-full"
              src={post?.user?.profileImage || noImage}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">{post?.user?.name}</p>
              <p className="text-small text-default-500 -mt-[2px]">
                @{post?.user?.userId}
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {post?.type == "Premium" && (
              <PremiumIcon height={35} width={35} fill={"#17c964"} />
            )}
            <div className="flex items-center gap-1 border-s border-y rounded-s-full px-4  shadow-sm shadow-gray-200">
              <p className="text-sm font-semibold py-2">{post?.category}</p>
              {post?.user._id == user?._id && (
                <Dropdown>
                  <DropdownTrigger>
                    <Button isIconOnly radius="full" variant="light">
                      <MoreIcon fill="#999999" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="flat"
                    color="secondary"
                    aria-label="Dropdown menu with icons"
                  >
                    <DropdownItem
                      key="Edit"
                      onPress={() => {
                        setPostId(post._id), editModalDisclosure.onOpen();
                      }}
                      startContent={<EditIcon width={16} height={16} fill="#7828c8" />}
                    >
                      Edit
                    </DropdownItem>
                    <DropdownItem
                      key="Delete"
                      startContent={<DeleteIcon width={16} height={16} fill="#7828c8" />}
                      onPress={()=>handleDeletePost(post._id)}
                    >
                      Delete
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                
              )}
            </div>
          </div>
        </CardHeader>

        <CardBody className="pt-0">
          <PostContentText content={post?.content} />
          {post?.images?.length > 0 && (
            <div className="max-w-xl mx-auto">
              <ImageGallery images={post.images} />
            </div>
          )}
        </CardBody>

        <CardFooter>
          <CommentWithUpDownVotes
            post={post}
            modalDisclosure={detailModalDisclosure}
          />

          {isModalShow && (
            <PostDetailsModal postId={post?._id} Disclosure={detailModalDisclosure} />
          )}
        </CardFooter>
      </Card>
      <CreatePostModal Disclosure={editModalDisclosure} postId={postId} />
    </>
  );
}
