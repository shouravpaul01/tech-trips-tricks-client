"use client";
import { updateUser } from "@/src/app/services/UserService";
import { updatePersonalInfoValidation } from "@/src/app/validation/user.validation";
import TTTForm from "@/src/components/form/TTTZForm";
import TTTZImageInput from "@/src/components/form/TTTZImageInput";
import TTTZInput from "@/src/components/form/TTTZInput";
import TTTZSelect from "@/src/components/form/TTTZSelect";
import TTTZTextArea from "@/src/components/form/TTTZTextarea";
import { ArrowForwardIcon, NOImageIcon } from "@/src/components/icons";
import { blankImage, genderOptions } from "@/src/constent";
import { TUser } from "@/src/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export default function PersonalInfoUpdate({user}:{user:TUser}) {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);


  const { mutate: handleUpdateUser, isPending } = useMutation({
    mutationKey: ["UPDATE_USER"],
    mutationFn: async (data: FieldValues) => await updateUser(data),
    onSuccess: (data) => {
      console.log(data);
      if (data?.status) {
        toast.success(data?.message)
      }
      
    },
  });
  const handleCoverImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setCoverImage(null);
    }
  };
  const handleProfileImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setProfileImage(null);
    }
  };
  const handleUpdate: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    formData.append("profileImage", data.profileImage);
    formData.append("coverImage", data.coverImage);
    delete data["profileImage"]
    delete data["coverImage"]
    formData.append("data", JSON.stringify(data));
    
    handleUpdateUser({userId:user.userId,formData});
   
  };
  return (
    <TTTForm onSubmit={handleUpdate} resolver={zodResolver(updatePersonalInfoValidation)} defaultValues={{name:user?.name,gender:user?.gender,address:user?.address,bio:user?.bio

    }}>
      <div className="space-y-2">
        <div>
          <p>Cover Image</p>
          <div className="border-dashed border-2  border-secondary p-1 rounded-md mb-2">
            <div className="relative h-[200px] bg-gray-600   rounded-md ">
              {coverImage ? (
                <Image
                  src={coverImage}
                  alt="Cover Image"
                  fill
                  objectFit="cover"
                />
              ) : (
                <div className="flex justify-center items-center h-full">
                  <NOImageIcon width={100} height={100} />
                </div>
              )}
            </div>
          </div>
          <TTTZImageInput name="coverImage" onChange={handleCoverImagePreview} />
        </div>
        <div>
          <p>Profile Image</p>

          <Image
            src={profileImage || blankImage}
            alt="profile image"
            width={112}
            height={112}
            className="rounded-full outline-dashed outline-2  outline-secondary "
          />

          <div className="max-w-sm mt-3">
            <TTTZImageInput
              name="profileImage"
              onChange={handleProfileImagePreview}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <TTTZInput
            name="name"
            inputProps={{ variant: "underlined", label: "Name" }}
          />
          <TTTZSelect
            name="gender"
            selectProps={{ variant: "underlined", label: "Gender" }}
            options={genderOptions}
          />
        </div>
        <div className="pt-2">
          <TTTZTextArea
            name="bio"
            textAreaProps={{
              variant: "bordered",
              label: "Bio",
              placeholder: "Enter your bio.",
            }}
          />
        </div>
        <TTTZInput
          name="address"
          inputProps={{ variant: "underlined", label: "Address" }}
        />
      </div>
      <div className="flex justify-end mt-2">
        <Button
          type="submit"
          color="secondary"
          variant="shadow"
          radius="sm"
          className=" text-white"
          startContent={<ArrowForwardIcon />}
        >
          Update
        </Button>
      </div>
    </TTTForm>
  );
}
