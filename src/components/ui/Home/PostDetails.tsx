import { TPost } from "@/src/types";
import { useState } from "react";
import ImageGallery from "../Post/ImageGallery";
import { countTotalCharecter } from "@/src/app/utils/countTotalCharecter";
import { Button } from "@nextui-org/button";
import { MoreIcon } from "../../icons";


export default function PostDetails({post}:{post:TPost}) {
  
    const [seeMore, setSeeMore] = useState<boolean>(false);
  return (
    <div>
       <div
          className={`mb-2 text-justify ${!seeMore && "line-clamp-4"}`}
          dangerouslySetInnerHTML={{ __html: post?.content }}
        ></div>
        {!seeMore && countTotalCharecter(post?.content) > 400 && (
          <div className="mb-1">
            <Button
              variant="light"
              color="secondary"
              size="sm"
              className="font-bold"
              startContent={<MoreIcon fill="#EA33F7" />}
              onClick={() => setSeeMore(true)}
            >
              See more
            </Button>
          </div>
        )}
        {post?.images?.length > 0 && (
          <div>
            <ImageGallery images={post.images} />
          </div>
        )}
    </div>
  )
}
