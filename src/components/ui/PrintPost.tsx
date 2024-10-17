import { Button } from "@nextui-org/button";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { PDFIcon } from "../icons";
import { TPost } from "@/src/types";
import ImageGallery from "./Post/ImageGallery";

export default function PrintPost({ post }: { post: TPost }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef,documentTitle:`TTTZDoc` });
  return (
    <div>
      <Button
        variant="light"
        color="secondary"
        size="sm"
        radius="full"
        className="text-sm"
        startContent={<PDFIcon />}
        onClick={() => reactToPrintFn()}
      >
        PDF
      </Button>

      {
        <div className="hidden">
          <div ref={contentRef} className="m-24">
          <div
        className={`mb-2 text-justify `}
        dangerouslySetInnerHTML={{ __html: post?.content }}
      ></div>
            {post?.images?.length > 0 && (
              <div className="max-w-xl mx-auto">
                <ImageGallery images={post.images} />
              </div>
            )}
          </div>
        </div>
      }
    </div>
  );
}
