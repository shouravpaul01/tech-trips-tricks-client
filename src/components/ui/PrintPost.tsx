import { Button } from "@nextui-org/button";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { PDFIcon } from "../icons";
import { TPost } from "@/src/types";
import ImageGallery from "./Post/ImageGallery";

export default function PrintPost({ post }: { post: TPost }) {
  return (
    <>
      <div
        className={`mb-2 text-justify `}
        dangerouslySetInnerHTML={{ __html: post?.content }}
      ></div>
      {post?.images?.length > 0 && (
        <div className="max-w-xl mx-auto">
          <ImageGallery images={post.images} />
        </div>
      )}
    </>
  );
}
