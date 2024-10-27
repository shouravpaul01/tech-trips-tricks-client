"use client";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import {
  useGetAllUsersForInfinete,
  useGetSingleUser,
} from "@/src/hooks/UserHook";
import InfiniteScroll from "react-infinite-scroll-component";
import TechEsthusiatsFollowCard from "./_components/TechEsthusiatsFollowCard";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTitle } from "@/src/hooks";


export default function FindTechEnthusiastsPage() {
  useTitle("Find Tech Esthusiats")
  const searchParams=useSearchParams()
  const search=searchParams.get("search") ? {label:"search",value:searchParams.get("search")} :null
  const { data: user } = useGetSingleUser();
  console.log(user)
  const followingUserId = user?.following?.map((user) => user?._id).filter(Boolean) || [];
  const nonEQUser=[user?._id, ...followingUserId!]
  const filterQuery = [{ label: "nonEQUser", value: nonEQUser },search].filter(Boolean)
  const [currentFollowingUser, setCurrentFollowingUser] = useState<
    (string | undefined)[]
  >([...nonEQUser]);

  const { data, hasNextPage, fetchNextPage, isLoading } =
    useGetAllUsersForInfinete({
      limit: 5,
      queryArgs:
        filterQuery.length > 0 &&  filterQuery[0]?.value?.length ? filterQuery : [],
    });
    console.log(filterQuery)
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
