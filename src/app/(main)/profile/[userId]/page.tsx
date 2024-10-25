import { getSingleUserByIdReq } from "@/src/services/UserService";
import DisplayAllPosts from "../_components/DisplayAllPosts";

export default async function Profile({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  const { data: user } = await getSingleUserByIdReq(userId);
  return (
    <div>
      <DisplayAllPosts userId={user._id} />
    </div>
  );
}
