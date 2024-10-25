import { CalenderIcon, VerifiedIcon } from "@/src/components/icons";
import MenuTabs from "./_components/MenuTabs";
import dayjs from "dayjs";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import EditProfileModal from "../_components/EditProfileModal";
import Image from "next/image";
import { getSingleUserByIdReq } from "@/src/services/UserService";
import { blankImage } from "@/src/constent";
import { ReactNode } from "react";

export default async function ProfileLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { userId: string };
}) {
  const { userId } = params;

  const { data: user } = await getSingleUserByIdReq(userId);
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[200px]">
          {!!user?.coverImage ? (
            <Image
              src={user?.coverImage}
              alt="Cover Image"
              fill
              objectFit="cover"
            />
          ) : (
            <div className="bg-gray-600 h-[200px]"></div>
          )}
        </div>
        <div className=" absolute -bottom-14 left-5">
          <Image
            src={user?.profileImage || blankImage}
            alt="profile image"
            width={112}
            height={112}
            className="rounded-full outline outline-4 outline-white "
          />
        </div>
      </div>
      <div className="px-4">
        <div className="flex justify-end mt-2 mb-4">
          <EditProfileModal user={user} />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <p className="font-bold text-xl">{user?.name}</p>
            <Tooltip
              showArrow
              content={
                user?.isSubscribed ? "User verified." : "User not verified."
              }
            >
              {user?.isSubscribed ? (
                <VerifiedIcon width={20} height={20} />
              ) : (
                <Button
                  variant="bordered"
                  radius="full"
                  size="sm"
                  startContent={<VerifiedIcon width={16} height={16} />}
                >
                  Get Verified
                </Button>
              )}
            </Tooltip>
          </div>
          <p className="text-gray-400 ">@{user?.userId}</p>
          <div className="mt-3">
            <p className="flex gap-1 text-gray-400 ">
              <CalenderIcon />{" "}
              <span>{dayjs(user?.createdAt).format("MMMM D, YYYY")}</span>
            </p>
            <div className="flex gap-5 mt-2">
              <p>
                {user?.following?.length}{" "}
                <span className="text-gray-400">Following</span>
              </p>
              <p>
                {user?.followers?.length}{" "}
                <span className="text-gray-400">Followers</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <MenuTabs user={user} />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
