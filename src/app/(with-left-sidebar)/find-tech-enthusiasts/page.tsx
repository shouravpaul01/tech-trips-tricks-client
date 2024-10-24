"use client";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import {
  useGetAllUsersForInfinete,
  useGetSingleUser,
} from "@/src/hooks/UserHook";
import InfiniteScroll from "react-infinite-scroll-component";
import TechEsthusiatsFollowCard from "./_components/TechEsthusiatsFollowCard";
import { useState } from "react";

export default function FindTechEnthusiastsPage() {
  const { data: user } = useGetSingleUser();
  const followingUserId = user?.following?.map((user) => user?._id) || [];
  const nonEQUser = [user?._id, ...followingUserId!];
  const [currentFollowingUser, setCurrentFollowingUser] = useState<
    (string | undefined)[]
  >([...nonEQUser]);

  const { data, hasNextPage, fetchNextPage, isLoading } =
    useGetAllUsersForInfinete({
      limit: 5,
      queryArgs:
        nonEQUser.length > 0 ? [{ label: "nonEQUser", value: nonEQUser }] : [],
    });
  const users = data?.pages.flatMap((item) => item.data) || [];
  isLoading && <TTTZLoading />;
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
            <TechEsthusiatsFollowCard
              key={index}
              user={user}
              isFollowers={false}
              isFollowing={true}
              currentFollowingUser={currentFollowingUser}
              setCurrentFollowingUser={setCurrentFollowingUser}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
