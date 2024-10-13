"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <LightGallery
      onInit={onInit}
      speed={500}
      elementClassNames={`grid gap-2 place-items-center grid-cols-2 ${images.length == 1 ? "grid-cols-1" : "grid-cols-2"}`}
      plugins={[lgThumbnail, lgZoom]}
    >
      {images?.map((image, index) => (
        <Link
          className={`w-full ${images.length == 3 && index == 0 ? "col-span-2" : "col-span-1"}`}
          key={index}
          href={image}
        >
          <Image
            alt={`PostImage-${index + 1}`}
            src={image}
            width={500}
            height={500}
            className="h-[250px] w-full rounded-md border object-cover"
          />
        </Link>
      ))}
    </LightGallery>
  );
}
