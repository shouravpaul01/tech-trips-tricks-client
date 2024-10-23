import { blankImage } from "@/src/constent";
import { followingUserReq } from "@/src/services/UserService";
import { TUser } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import React from "react";

export default function TechEsthusiatsFollowCard({ user }: { user: TUser }) {
  const handleFollowing = async (followingUserId: string) => {
    console.log(followingUserId);
    const res = await followingUserReq(followingUserId);
    console.log(res);
  };
  return (
    <div className="flex items-center p-4 rounded-md shadow-md">
      <div className="flex flex-1 gap-3">
        <Avatar
          isBordered
          radius="sm"
          className="w-20 h-20 text-large"
          src={user.profileImage || blankImage}
        />
        <div>
          <p className="font-bold">{user.name}</p>
          <p className="font-semibold text-gray-400 -mt-1">@{user.userId}</p>
          <div className="flex gap-2 text-sm mt-2">
            <p>{user.following?.length} Following</p>
            <p>{user.followers?.length} Followers</p>
          </div>
        </div>
      </div>
      <div>
        <Button
          color="secondary"
          size="sm"
          onPress={() => handleFollowing(user._id)}
        >
          Follow
        </Button>
      </div>
    </div>
  );
}
