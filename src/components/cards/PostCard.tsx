"use client"
import { noImage } from "@/src/constent";
import { TPost } from "@/src/types";
import { Card, CardBody, CardFooter, CardHeader, CardProps } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import CommentWithUpDownVotes from "../ui/Comment/CommentWithUpDownVotes";
import { useDisclosure } from "@nextui-org/modal";
import PostDetailsModal from "../modals/PostDetailsModal";
import { PremiumIcon } from "../icons";
import ImageGallery from "../ui/Post/ImageGallery";
import PostContentText from "../ui/Post/PostContentText";

export default function PostCard({ cardProps,isModalShow=true,post }: { cardProps:CardProps,isModalShow?:boolean,post: TPost }) {
  const modalDisclosure = useDisclosure();
  return (
    <Card
     {...cardProps}
    >
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
          <p className="text-sm font-semibold border-s border-y rounded-s-full px-4 py-2 shadow-sm shadow-gray-200">
            {post?.category}
          </p>
        </div>
      </CardHeader>

      <CardBody className="pt-0">
        <PostContentText content={post?.content}/>
        {post?.images?.length > 0 && (
          <div className="max-w-xl mx-auto">
            <ImageGallery images={post.images} />
          </div>
        )}
      </CardBody>
     
      <CardFooter >
        <CommentWithUpDownVotes post={post} modalDisclosure={ modalDisclosure} />

        {
          isModalShow && <PostDetailsModal postId={post?._id} Disclosure={modalDisclosure} />
        }
      </CardFooter>
    </Card>
  );
}
