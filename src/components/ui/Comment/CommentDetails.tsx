import { blankImage, noImage } from "@/src/constent";
import { TComment, TPost } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";

export default function CommentDetails({profileImage, comment}: {profileImage:string, comment:TComment }) {
  return (
    <>
      <div className="flex gap-2 mt-2">
        <div>
          <Avatar src={profileImage || blankImage} />
        </div>
        <Card isBlurred={true}>
          <CardBody className="max-w-xl">
            <p>{comment?.text}</p>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
