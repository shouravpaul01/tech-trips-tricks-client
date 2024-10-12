"use client";

import { FieldValues, SubmitHandler } from "react-hook-form";
import TTTForm from "../form/TTTZForm";
import TTTZTextEditor from "../form/TTTZTextEditor";
import { PostAddIcon, XmarkIcon } from "../icons";
import TTTZModal from "./TTTZModal";
import { Button } from "@nextui-org/button";
import RadioInputForCategory from "../form/RadioInputForCategory";
import TTTZImageInput from "../form/TTTZImageInput";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidation } from "@/src/app/validation/post.validation";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "@/src/app/services/PostService";
import { toast } from "sonner";
import { TErrorMessage } from "@/src/types";

export default function CreatePostModal() {
  const [errors, setErrors] = useState<TErrorMessage[]>([]);
  const [imagesData, setImagesData] = useState<
    { file: File; preview: string }[]
  >([]);
  const { mutate: handlePost, isSuccess } = useMutation({
    mutationKey: ["UPDATE_USER"],
    mutationFn: async (data: FieldValues) => await createPost(data),
    onSuccess: (data) => {
      console.log(data);
      if (data?.status) {
        toast.success(data?.message);
      }
      if (!!data?.errorMessages) {
        setErrors([...data?.errorMessages]);
      }
    },
  });
  //Added images in state
  const handleImagesPreview = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const newImagesData: { file: File; preview: string }[] = Array.from(
        selectedFiles
      ).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      setImagesData((prev) => [...prev, ...newImagesData]);
    }
  };
  //Delete image from state
  const handleDeleteImage = (indexToDelete: number) => {
    setImagesData((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const handleCreatePost: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    if (imagesData?.length > 0) {
      imagesData.forEach((image) => formData.append("images", image.file));
    }
    formData.append("data", JSON.stringify(data));
    handlePost(formData);
  };

  return (
    <TTTZModal
      btnTitle="Post"
      modalProps={{
        shadow: "lg",
        size: "2xl",
        scrollBehavior: "inside",
        isDismissable: false,
        defaultOpen: true,
      }}
      isModalClose={isSuccess}
      btnProps={{
        color: "secondary",
        className: "w-full",
        startContent: <PostAddIcon width={16} height={16} />,
      }}
      headerTitle="Create Post"
    >
      <TTTForm
        onSubmit={handleCreatePost}
        resolver={zodResolver(postValidation)}
        errors={errors}
      >
        <div className="space-y-3">
          <RadioInputForCategory name="category" />

          <TTTZTextEditor name="content" />
          <div>
            <TTTZImageInput
              name="images"
              multiple={true}
              onChange={handleImagesPreview}
            />
            {/* Image Previews */}
            <div className="flex gap-4 mt-4">
              {imagesData?.map((image, index) => (
                <div key={index} className="relative">
                  <div className=" border-2 border-dashed border-gray-500 rounded-md p-1">
                    <img
                      src={image.preview}
                      alt={`Preview ${index}`}
                      className="w-28 h-28 object-cover  rounded-md"
                    />
                  </div>
                  <Button
                    isIconOnly
                    size="sm"
                    radius="full"
                    onClick={() => handleDeleteImage(index)}
                    className="absolute -top-3 -right-3"
                  >
                    <XmarkIcon />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button
          type="submit"
          color="secondary"
          radius="sm"
          className="w-40 mt-3"
          startContent={<PostAddIcon />}
        >
          Post
        </Button>
      </TTTForm>
    </TTTZModal>
  );
}
