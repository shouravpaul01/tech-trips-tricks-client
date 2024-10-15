import { noImage } from "@/src/constent";
import { TPost } from "@/src/types";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import CommentCard from "../ui/Comment/CommentDetails";
import PostDetails from "../ui/Home/PostDetails";
import CommentWithUpDownVotes from "../ui/Comment/CommentWithUpDownVotes";
import { useDisclosure } from "@nextui-org/modal";
import PostDetailsModal from "../modals/PostDetailsModal";

export default function PostCard({ post }: { post: TPost }) {
  const modalDisclosure=useDisclosure()
  return (
    <Card
      className="max-w-full"
      radius="sm"
      shadow="none"
      classNames={{ base: "border" }}
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
        <div>
          <p className="text-sm font-semibold border-s border-y rounded-s-full px-4 py-2 shadow-sm shadow-gray-200">{post?.category}</p>
        </div>
      </CardHeader>

      <CardBody className="pt-0">
       <PostDetails post={post}/>
      </CardBody>
      <Divider />
      <CardFooter className="flex-col ">
       
          <CommentWithUpDownVotes post={post} modalDisclosure={modalDisclosure}/>

          
         <PostDetailsModal postId={post?._id} Disclosure={modalDisclosure}/>
      </CardFooter>
    </Card>
  );
}
