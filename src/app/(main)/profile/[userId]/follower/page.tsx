"use client"

import TechEsthusiatsFollowCard from "@/src/app/(with-left-sidebar)/find-tech-enthusiasts/_components/TechEsthusiatsFollowCard";
import { useGetSingleUser } from "@/src/hooks/UserHook";

export default function FollowerPage() {
  const { data: user, isLoading } = useGetSingleUser();
  const currentFollowers=user?.following?.map((user) => user._id)
  

  return (
    <div className="mt-5 space-y-4">
      {user?.followers?.map((user, index) => (
        <TechEsthusiatsFollowCard
          key={index}
          user={user}
          isFollowers={true}
          isFollowing={false}
          currentFollowingUser={currentFollowers!}
        />
      ))}
      {user?.followers?.length==0 && <p className="text-center text-gray-400">You have no followers</p>}
    </div>
  );
}
