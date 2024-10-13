"use client";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "@/src/styles/lightGallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { LightGallery as ILightGallery } from "lightgallery/lightgallery";

export default function PostDetailsImageGallery({images}:{images:string[]}) {
  const containerRef = useRef(null);
  const [galleryContainer, setGalleryContainer] = useState<HTMLElement | any>("");

  const onInit = useCallback((detail) => {
    if (detail) {
      // lightGalleryRef.current = detail.instance;
      detail.instance.openGallery();
    }
  }, []);
  useEffect(() => {
    if (containerRef.current) {
      setGalleryContainer("aaa");
    }
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
        }}
        ref={containerRef}
      ></div>
      <LightGallery
        container={containerRef.current}
        onInit={onInit}
        plugins={[lgZoom, lgThumbnail]}
        closable={false}
        showMaximizeIcon={true}
        slideDelay={400}
        thumbWidth={130}
        thumbHeight={"100px"}
        thumbMargin={6}
        appendSubHtmlTo={".lg-item"}
        dynamic={true}
        dynamicEl={
          images.map(image=> {
            return {
                src:image,
                responsive:image,
                thumb:image,
               
              }
          })
       
        }
        hash={false}
        elementClassNames={"inline-gallery-container"}
      ></LightGallery>
    </>
  );
}
