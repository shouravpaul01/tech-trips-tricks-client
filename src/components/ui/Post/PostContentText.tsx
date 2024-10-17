"use client"

import { countTotalCharecter } from "@/src/utils/countTotalCharecter";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { MoreIcon } from "../../icons";



export default function PostContentText({content}:{content:string}) {
    const [seeMore, setSeeMore] = useState<boolean>(false);
  return (
    <div>
       <div
          className={`mb-2 text-justify ${!seeMore && "line-clamp-4"}`}
          dangerouslySetInnerHTML={{ __html:content }}
        ></div>
        {!seeMore && countTotalCharecter(content) > 400 && (
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
    </div>
  )
}
