"use client"
import { ArrowForwardIcon, PersonAddIcon } from "@/src/components/icons";
import { blankImage } from "@/src/constent";
import { followingUserReq, unfollowUserReq } from "@/src/services/UserService";
import { TUser } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "sonner";


export default function TechEsthusiatsFollowCard({isFollowing,isFollowers, user,currentFollowingUser,setCurrentFollowingUser}: {isFollowing:boolean,isFollowers:boolean, user: TUser,currentFollowingUser?:string[],setCurrentFollowingUser?:(value:string[])=>void } ) {

  const queryClient=useQueryClient()
 
  console.log(user,currentFollowingUser,'followingUser')
  const handleFollowing = async (followingUserId: string) => {
    console.log(followingUserId);
    const res = await followingUserReq(followingUserId);
    if (res.status && res.data) {
      queryClient.invalidateQueries({queryKey:["find-users"]})
      toast.success(res.message);
      setCurrentFollowingUser?.([...res.data])
    }
    if (!res.status && res?.errorMessages) {
      toast.error(res.errorMessages[0].message);
    }
    
  };
  const handleUnfollow = async (followingUserId: string) => {
    console.log(followingUserId);
    const res = await unfollowUserReq(followingUserId);
    if (res.status && res.data) {
      queryClient.invalidateQueries({queryKey:["find-users"]})
      queryClient.invalidateQueries({queryKey:["single-user"]})
      toast.success(res.message);
      setCurrentFollowingUser?.([...res.data])
    }
    if (!res.status && res?.errorMessages) {
      toast.error(res.errorMessages[0].message);
    }
    
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
     {
       isFollowing && <Button
      
       color={currentFollowingUser?.includes(user._id)?"default":"secondary"}
       size="sm"
       onPress={() =>currentFollowingUser?.includes(user._id)?handleUnfollow(user._id): handleFollowing(user._id)}
       startContent={currentFollowingUser?.includes(user._id)?<ArrowForwardIcon fill="#000000"/>:<PersonAddIcon fill="#FFFFFF"/>}
       
     >
      {currentFollowingUser?.includes(user._id)?"Cencel":" Follow"}
     </Button>
     }
     {
       isFollowers && <Button
      
       color={currentFollowingUser?.includes(user._id)?"default":"secondary"}
       size="sm"
       onPress={() =>currentFollowingUser?.includes(user._id)?handleUnfollow(user._id): handleFollowing(user._id)}
       startContent={currentFollowingUser?.includes(user._id)?<ArrowForwardIcon fill="#000000"/>:<PersonAddIcon fill="#FFFFFF"/>}
       
     >
      {currentFollowingUser?.includes(user._id)?"Cencel":" Follow Back"}
     </Button>
     }
      </div>
    </div>
  );
}
