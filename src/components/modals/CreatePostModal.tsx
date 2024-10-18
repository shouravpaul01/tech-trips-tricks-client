"use client";

import { FieldValues, SubmitHandler } from "react-hook-form";
import TTTForm from "../form/TTTZForm";
import TTTZTextEditor from "../form/TTTZTextEditor";
import { PostAddIcon, XmarkIcon } from "../icons";
import { Button } from "@nextui-org/button";
import RadioInputForCategory from "../form/RadioInputForCategory";
import TTTZImageInput from "../form/TTTZImageInput";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidation } from "@/src/validation/post.validation";
import { TErrorMessage } from "@/src/types";
import { getCurrentuser } from "@/src/services/AuthService";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
  UseDisclosureProps,
} from "@nextui-org/modal";
import RadioInputForPremiumContent from "../form/RadioInputForPremiumContent";
import { useCreatePost, useGetSinglePost, useRemoveImageFromPost, useUpdatePost } from "@/src/hooks/PostHook";
import TTTZLoading from "../ui/TTTZLoading";

export default function CreatePostModal({Disclosure,postId}:{Disclosure:UseDisclosureProps | any,postId?:string}) {
  const { isOpen, onClose, onOpenChange } = Disclosure || useDisclosure();
  const [errors, setErrors] = useState<TErrorMessage[]>([]);
  const [imagesData, setImagesData] = useState<
    { file: File; preview: string }[]
  >([]);
  const { data: post,isLoading } = useGetSinglePost(postId!);
  const { mutate: createPost } =useCreatePost(onClose,setErrors)
  const { mutate: updatePost, } =useUpdatePost(setErrors)
  const { mutate: removeImage,} =useRemoveImageFromPost(setErrors)
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

  const handleCreatePost: SubmitHandler<FieldValues> = async (data) => {
    const user = await getCurrentuser();
    data.user = user._id;
    const formData = new FormData();
    if (imagesData?.length > 0) {
      imagesData.forEach((image) => formData.append("images", image.file));
    }
    formData.append("data", JSON.stringify(data));
    createPost(formData);
  };
  const handleUpdatePost: SubmitHandler<FieldValues> = async (data) => {
    
    const formData = new FormData();
    if (imagesData?.length > 0) {
      imagesData.forEach((image) => formData.append("images", image.file));
    }
    formData.append("data", JSON.stringify(data));
    const updateData={
      postId:post?._id,
      data:formData
    }
    updatePost(updateData);
  };

  

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      size="2xl"
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {post?"Edit":"Create"} Post
            </ModalHeader>
            <ModalBody>
              {isLoading && <TTTZLoading />}
              <TTTForm
                onSubmit={post?handleUpdatePost:handleCreatePost}
                resolver={zodResolver(postValidation)}
                defaultValues={{type:post?.type,category:post?.category,content:post?.content}}
                errors={errors}
              >
                <div className="space-y-3">
                  <RadioInputForPremiumContent name="type" />
                  <RadioInputForCategory name="category" />

                  <TTTZTextEditor
                    name="content"
                    placeholder="Start writing content..."
                  />
                  <div>
                    <TTTZImageInput
                      name="images"
                      multiple={true}
                      onChange={handleImagesPreview}
                    />
                    {/* Image Previews */}
                    {imagesData.length>0 && <p className="my-4">Image Previews</p>}
                    <div className="flex gap-4 ">
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
                    {/* Post Images preview */}
                    {post?.images.length!>0 && <p className="my-4">Posts Images</p>}
                    <div className="flex gap-4 ">
                      {post?.images?.map((image, index) => (
                        <div key={index} className="relative">
                          <div className=" border-2 border-dashed border-gray-500 rounded-md p-1">
                            <img
                              src={image}
                              alt={`Preview ${index}`}
                              className="w-28 h-28 object-cover  rounded-md"
                            />
                          </div>
                          <Button
                            isIconOnly
                            size="sm"
                            radius="full"
                            color="danger"
                            onClick={() => removeImage({postId:post._id,image})}
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
                  {post?"Update":"Post"}
                </Button>
              </TTTForm>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
    
  );
}
