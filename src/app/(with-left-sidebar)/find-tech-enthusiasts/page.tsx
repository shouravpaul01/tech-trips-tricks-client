"use client";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import { useGetAllUsersForInfinete } from "@/src/hooks/UserHook";
import InfiniteScroll from "react-infinite-scroll-component";
import TechEsthusiatsFollowCard from "./_components/TechEsthusiatsFollowCard";
import { useEffect, useState } from "react";
import { getCurrentuser } from "@/src/services/AuthService";
import { getSingleUserReq } from "@/src/services/UserService";
import { useUser } from "@/src/context/user.provider";

export default function FindTechEnthusiastsPage() {
  const [nonEQUser, setNonEQUser] = useState<string[]>();

  useEffect(() => {
    const currenUser = async () => {
      const { data: user } = await getSingleUserReq();
      setNonEQUser([user._id, ...user.following]);
    };
    currenUser();
  }, []);
  
  const { data, hasNextPage, fetchNextPage, isLoading,isFetching } =
    useGetAllUsersForInfinete({
      limit: 5,
      queryArgs:  nonEQUser
      ? [{ label: "nonEQUser", value: nonEQUser }] 
      : [],
    });
  const users = data?.pages.flatMap((item) => item.data) || [];
  isLoading && <TTTZLoading />;
console.log(isLoading,isFetching)
  return (
    <div className="p-4">
      <InfiniteScroll
        dataLength={users.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<TTTZLoading />}
        endMessage={
          isLoading ? (
            <TTTZLoading />
          ) : (
            <p className="text-sm text-gray-500 font-semibold text-center mt-3">
              No More Tech Exthusiats
            </p>
          )
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users?.map((user, index) => (
            <TechEsthusiatsFollowCard key={index} user={user} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
