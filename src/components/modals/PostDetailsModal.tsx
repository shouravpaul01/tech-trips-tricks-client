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

import { getSinglePost } from "@/src/app/services/PostService";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import PostDetails from "../ui/Home/PostDetails";
import CommentDetails from "../ui/Comment/CommentDetails";
import CommentWithUpDownVotes from "../ui/Comment/CommentWithUpDownVotes";

export default function PostDetailsModal({
  Disclosure,
  postId,
}: {
  postId: string;
  Disclosure: UseDisclosureProps | any;
}) {
  const { isOpen, onClose, onOpenChange } = Disclosure;
  const { data: post, isLoading } = useQuery({
    queryKey: ["single-posts", postId],
    queryFn: async () => {
      const res = await getSinglePost(postId);
      if (res?.errorMessages?.length > 0) {
        toast.error("Post not found.");

        onClose();
      }
      return res.data;
    },
    enabled: !!postId,
  });
  
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      size="2xl"
      classNames={{ footer: "flex-col" }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {post?.user?.name}'s Post
            </ModalHeader>
            <ModalBody>
              <>
                <PostDetails post={post!} />
                <div className="border-y-1">
                  <CommentWithUpDownVotes post={post!} />
                </div>
                {post?.comments?.map((comment, index) => (
                  <CommentDetails
                    key={index}
                    profileImage={post?.user?.profileImage}
                    comment={comment}
                  />
                ))}
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
