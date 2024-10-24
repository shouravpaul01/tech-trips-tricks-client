import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import React from "react";
import { PersonAddIcon } from "../icons";
import { TUser } from "@/src/types";
import { blankImage } from "@/src/constent";
import { Chip } from "@nextui-org/chip";
import { useUser } from "@/src/context/user.provider";
import { useQueryClient } from "@tanstack/react-query";
import { followingUserReq } from "@/src/services/UserService";
import { toast } from "sonner";

export default function FollowingDetailsTooltipCard({
  user,
  followingUserId,
  followersUserId,
}: {
  user: TUser;
  followingUserId?: string[];
  followersUserId?: string[];
}) {
  const { user: currentuser } = useUser();
  const queryClient = useQueryClient();

  const handleFollowing = async (followingUserId: string) => {
    const res = await followingUserReq(followingUserId);
    if (res.status && res.data) {
      queryClient.invalidateQueries({ queryKey: ["find-users"] });
      queryClient.invalidateQueries({ queryKey: ["single-user"] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success(res.message);
      
    }
    if (!res.status && res?.errorMessages) {
      toast.error(res.errorMessages[0].message);
    }
  };
  return (
    <div className="w-[250px] p-2">
      <div className="flex justify-between">
        {" "}
        <Avatar src={user?.profileImage || blankImage} size="lg" />
        {!followingUserId?.includes(user._id) &&
          currentuser?._id !== user._id && (
            <Button
              size="sm"
              color="secondary"
              startContent={<PersonAddIcon fill="#FFFFFF" />}
              onPress={() => handleFollowing(user._id)}
            >
              Follow
            </Button>
          )}
      </div>
      <p className="font-bold">{user?.name}</p>
      <p className="font-semibold text-gray-400">@{user?.userId}</p>
      <div className="flex gap-3">
        <Chip
          startContent={
            <span className="font-semibold">{user?.following?.length}</span>
          }
          variant="light"
        >
          Following
        </Chip>
        <Chip
          startContent={
            <span className="font-semibold">{user?.followers?.length}</span>
          }
          variant="light"
        >
          Followers
        </Chip>
      </div>
    </div>
  );
}
