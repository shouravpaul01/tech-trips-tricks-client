import { getSingleUserReq } from "@/src/services/UserService";
import DisplayAllPosts from "../_components/DisplayAllPosts";


export default async function Profile({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  // console.log( userId, "user");
  const { data: user } = await getSingleUserReq();
 
  return (
    <div>
      <DisplayAllPosts userId={user._id}/>
    </div>
  );
}
