"use client"
import { PostIcon } from "@/src/components/icons"
import { useUser } from "@/src/context/user.provider";
import { useTitle } from "@/src/hooks"
import { useGetAllPosts } from "@/src/hooks/PostHook";

export default function UserDashboardPage() {
  useTitle("Dashboard")
  const { user } = useUser();
  const { data, isLoading } = useGetAllPosts({
    page: 0,
    queryArgs: [
      { label: "user", value: user?._id },
    ],
  });
 
  return (
    <div className="mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center bg-purple-200 p-4 rounded-md shadow-xl">
          <div className="flex-1">
            <p className="font-bold  text-xl">Posts</p>
            <p className="font-bold text-xl">Total: {data?.data?.length}</p>
          </div>
          <p>
            <PostIcon width={40} height={40} />
          </p>
        </div>
      </div>
      </div>
  )
}
