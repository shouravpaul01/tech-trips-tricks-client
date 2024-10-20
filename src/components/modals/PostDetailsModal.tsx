"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  UseDisclosureProps,
} from "@nextui-org/modal";
import CommentForm from "../form/comment/CommentForm";
import CommentDetails from "../ui/Comment/CommentDetails";
import CommentWithUpDownVotes from "../ui/Comment/CommentWithUpDownVotes";
import CommentLoading from "../ui/CommentLoading";
import { useGetSinglePost} from "@/src/hooks/PostHook";
import PostContentText from "../ui/Post/PostContentText";
import ImageGallery from "../ui/Post/ImageGallery";
import TTTZLoading from "../ui/TTTZLoading";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { MoreIcon, XmarkIcon } from "../icons";


export default function PostDetailsModal({
  Disclosure,
  postId,
}: {
  postId: string;
  Disclosure: UseDisclosureProps | any;
}) {
  const { isOpen, onOpenChange } = Disclosure;
  const [showAllComments, setShowAllComments] = useState(false);
  const { data: post,isLoading, isFetching } = useGetSinglePost(postId);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      size="2xl"
      classNames={{ footer: "flex-col" }}
      closeButton={<Button isIconOnly size="sm"><XmarkIcon fill="#00000"/></Button>}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {post?.user?.name}'s Post
            </ModalHeader>
            <ModalBody>
              <>
              {(isLoading && isFetching) && <TTTZLoading />}
                <PostContentText content={post?.content!} />
                {post?.images?.length! > 0 && (
                  <div>
                    <ImageGallery images={post?.images!} />
                  </div>
                )}
                <div className="border-y-1">
                  <CommentWithUpDownVotes post={post!} />
                </div>
                {(showAllComments?post?.comments:post?.comments.slice(0,10))?.map((comment:any, index:number) => (
                  <CommentDetails
                    key={index}
                   
                    comment={comment}
                  />
                ))}
                {
                  !showAllComments && post?.comments?.length!>10 && <div>
                  <Button variant="light" color="secondary" size="sm" startContent={<MoreIcon fill="#999999"/>} className="ms-8" onPress={()=>setShowAllComments(true)}>More Comments</Button>
                  </div>
                }
                {isFetching && <CommentLoading />}
              </>
            </ModalBody>

            <ModalFooter>
              <CommentForm postId={post?._id!} />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
PostDetailsModal;
