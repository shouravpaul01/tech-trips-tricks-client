import { getSingleUserByIdReq } from "@/src/services/UserService";
import DisplayAllPosts from "../_components/DisplayAllPosts";
import { title } from "process";
import { Metadata } from "next";

export const metadata:Metadata={
  title:{absolute:"Profile"}
}
export default async function Profile({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  const { data: user } = await getSingleUserByIdReq(userId);
  return (
    <div>
      <DisplayAllPosts userId={user?._id} />
    </div>
  );
}
