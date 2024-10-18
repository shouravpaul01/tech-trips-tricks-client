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


export default function PostDetailsModal({
  Disclosure,
  postId,
}: {
  postId: string;
  Disclosure: UseDisclosureProps | any;
}) {
  const { isOpen, onOpenChange } = Disclosure;
  const { data: post,isLoading, isFetching } = useGetSinglePost(postId);

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
                {post?.comments?.map((comment:any, index:number) => (
                  <CommentDetails
                    key={index}
                    profileImage={post?.user?.profileImage}
                    comment={comment}
                  />
                ))}
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
