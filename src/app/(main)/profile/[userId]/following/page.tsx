"use client";
import TechEsthusiatsFollowCard from "@/src/app/(with-left-sidebar)/find-tech-enthusiasts/_components/TechEsthusiatsFollowCard";
import { useGetSingleUser } from "@/src/hooks/UserHook";


export default  function FollowingPage() {
  const { data: user, isLoading } = useGetSingleUser();
  const currentFollowingUser=user?.following?.map((user) => user._id)
  

  return (
    <div className="mt-5 space-y-4">
      {user?.following?.map((user, index) => (
        <TechEsthusiatsFollowCard
          key={index}
          user={user}
          isFollowers={false}
          isFollowing={true}
          currentFollowingUser={currentFollowingUser!}
        />
      ))}
      {user?.following?.length==0 && <p className="text-center text-gray-400">You are not following any tech enthusiasts.</p>}
    </div>
  );
}