import { noImage } from "@/src/constent";
import { TPost } from "@/src/types";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ImageGallery from "../ui/Post/ImageGallery";
import { Button } from "@nextui-org/button";
import { AddCommentkIcon, MoreIcon, ThumbDownkIcon, ThumbUpkIcon } from "../icons";
import { countTotalCharecter } from "@/src/app/utils/countTotalCharecter";

export default function PostCard({ post }: { post: TPost }) {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  return (
    <Card
      className="max-w-full"
      radius="sm"
      shadow="none"
      classNames={{ base: "border" }}
    >
      <CardHeader className="flex gap-3 " >
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
      </CardHeader>
   
      <CardBody className="pt-0">
        <div className={`mb-2 text-justify ${!seeMore && "line-clamp-4"}`} dangerouslySetInnerHTML={{ __html: post?.content }}>
         
        </div>
        {
          (!seeMore && countTotalCharecter(post?.content)>400) && <div>
            <Button
          variant="flat"
          color="secondary"
          size="sm"
          className="font-bold"
          startContent={<MoreIcon fill="#EA33F7" />}
          onClick={() => setSeeMore(true)}
        >
          See more
        </Button>
          </div>
        }
        {post?.images?.length > 0 && (
          <div>
            <ImageGallery images={post.images} />
          </div>
        )}
      </CardBody>
      <Divider />
      <CardFooter className="">
        
          <div className="flex-1">
            <Button isIconOnly variant="light" color="secondary" radius="full">
              <ThumbUpkIcon fill="#999999" />
            </Button>
            <Button isIconOnly variant="light" color="secondary" radius="full">
              <ThumbDownkIcon fill="#999999" />
            </Button>
          </div>
          <div className="">
            <Button variant="light"  radius="full" color="secondary" className="text-gray-500" endContent={<AddCommentkIcon fill="#999999"/>}>
              10 Comments
            </Button>
          </div>
        
      </CardFooter>
    </Card>
  );
}
