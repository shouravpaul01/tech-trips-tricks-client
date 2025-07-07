"use client";
import { ArrowForwardIcon, PersonAddIcon } from "@/src/components/icons";
import { blankImage } from "@/src/constent";
import { useUser } from "@/src/context/user.provider";
import { useGetAllUsers, useGetSingleUser } from "@/src/hooks/UserHook";
import {
  followBackUserReq,
  followingUserReq,
  getSingleUserReq,
  unfollowUserReq,
} from "@/src/services/UserService";
import { TUser } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function FindTechEnthusiasts() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const { data: user } = useGetSingleUser();







  const handleFollowBack = async (followingUserId: string) => {
    const res = await followBackUserReq(followingUserId);

    if (res.status && res.data) {
      queryClient.invalidateQueries({ queryKey: ["find-users"] });
      queryClient.invalidateQueries({ queryKey: ["single-user"] });
      toast.success(res.message);
    }
    if (!res.status && res?.errorMessages) {
      toast.error(res.errorMessages[0].message);
    }
  };
  return (
    <>
    {
        user?.followers?.length! > 0 && <div className="mb-2">
      <div className="flex justify-between items-center pb-3 shadow-sm">
        <p className=" ">Who to Follow</p>
        <Button
          as={Link}
          href="/find-tech-enthusiasts"
          color="default"
          size="sm"
        >
          View More
        </Button>
      </div>
      {user?.followers?.slice(0,2).map((user, index) => (
        <div className="p-2 rounded-md  space-y-2">
          <div className="flex  gap-3">
            <Avatar
              radius="sm"
              className="w-12 h-12 text-large"
              src={user?.profileImage || blankImage}
            />
            <div>
              <Link
                href={`/profile/${user?.userId}`}
                className="font-semibold hover:underline hover:text-blue-600"
              >
                {user.name}
              </Link>
              <p className="font-semibold text-gray-400 -mt-1">
                @{user.userId}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              color="default"
              size="sm"
              onPress={() => handleFollowBack(user?._id)}
              startContent={<ArrowForwardIcon fill="#FFFFFF" />}
            >
              Cencel
            </Button>
            <Button
              color={"secondary"}
              size="sm"
              onPress={() => handleFollowBack(user?._id)}
              startContent={<PersonAddIcon fill="#FFFFFF" />}
            >
              Follow Back
            </Button>
          </div>
        </div>
      ))}
    </div>
    }
    </>
  );
}
