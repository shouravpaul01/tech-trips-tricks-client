"use client";
import { blankImage } from "@/src/constent";
import { TPost } from "@/src/types";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from "@nextui-org/card";
import CommentWithUpDownVotes from "../ui/Comment/CommentWithUpDownVotes";
import { useDisclosure } from "@nextui-org/modal";
import {
  DeleteIcon,
  EditIcon,
  MoreIcon,
  PDFIcon,
  PremiumIcon,
  ShareIcon,
} from "../icons";
import ImageGallery from "../ui/Post/ImageGallery";
import PostContentText from "../ui/Post/PostContentText";
import { Button } from "@nextui-org/button";
import { useUser } from "@/src/context/user.provider";
import CreatePostModal from "../modals/CreatePostModal";
import { useEffect, useRef, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useDeletePost } from "@/src/hooks/PostHook";
import PrintPost from "../ui/PrintPost";
import { useReactToPrint } from "react-to-print";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { Tooltip } from "@nextui-org/tooltip";
import { Avatar } from "@nextui-org/avatar";
import FollowingDetailsTooltipCard from "../ui/FollowingDetailsTooltipCard";
import Link from "next/link";

export default function PostCard({
  cardProps,
  isModalOpen = true,
  post,
  followingUserId,
  followersUserId
,
}: {
  cardProps: CardProps;
  isModalOpen?: boolean;
  post: TPost;
  followingUserId?:string[]
  followersUserId?:string[]
}) {
  const [baseUrl, setBaseUrl] = useState("");
  const editModalDisclosure = useDisclosure();

  const { user } = useUser();
  const [postId, setPostId] = useState<string>("");
  const { mutate: handleDeletePost } = useDeletePost();
  const userMatched = post?.user._id === user?._id;
  const printRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef: printRef,
    documentTitle: `TTTZDoc`,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin);
    }
  }, []);

  return (
    <>
      <Card {...cardProps}>
        <CardHeader className="justify-between p-0">
          <Tooltip
          showArrow
            content={
              <FollowingDetailsTooltipCard user={post?.user} followingUserId={followingUserId} followersUserId={followersUserId}/>
            }
          >
            <div className="flex gap-3 p-3">
              
              <Avatar src={post?.user?.profileImage || blankImage} size="lg" />
              <div className="flex flex-col">
                <Link href={`/profile/${post?.user?.userId}`} className="text-md hover:underline hover:text-blue-500">{post?.user?.name}</Link>
                <p className="text-small text-default-500 -mt-[2px]">
                  @{post?.user?.userId}
                </p>
              </div>
            </div>
          </Tooltip>
          <div className="flex gap-2 items-center">
            {post?.type == "Premium" && (
              <PremiumIcon height={35} width={35} fill={"#17c964"} />
            )}
            <div className="flex items-center gap-1 border-s border-y rounded-s-full px-4  shadow-sm shadow-gray-200">
              <p className="text-sm font-semibold text-gray-400 py-2">
                {post?.category}
              </p>

              <Dropdown showArrow>
                <DropdownTrigger>
                  <Button isIconOnly radius="full" variant="light">
                    <MoreIcon fill="#7828c8" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  variant="flat"
                  color="secondary"
                  aria-label="Dynamic Actions"
                >
                  <DropdownSection showDivider={userMatched}>
                    <DropdownItem key="Share" closeOnSelect={false}>
                      <Popover placement="right" showArrow>
                        <PopoverTrigger>
                          <button className="flex gap-2 items-center w-full focus:outline-none focus:ring-0 focus:border-none">
                            <ShareIcon width={16} height={16} fill="#7828c8" />
                            Share
                          </button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div>
                            <p className="font-semibold text-gray-400 border-b pb-1">
                              Share on social sites
                            </p>
                            <div className="flex flex-wrap justify-center gap-2 my-3">
                              <FacebookShareButton
                                url={`${baseUrl}/details/${post?._id}`}
                              >
                                <FacebookIcon size={32} round />
                              </FacebookShareButton>
                              <LinkedinShareButton
                                url={`${baseUrl}/details/${post?._id}`}
                                source={baseUrl}
                              >
                                <LinkedinIcon size={32} round />
                              </LinkedinShareButton>
                              <TwitterShareButton
                                url={`${baseUrl}/details/${post?._id}`}
                              >
                                <TwitterIcon size={32} round />
                              </TwitterShareButton>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </DropdownItem>

                    <DropdownItem
                      key="print"
                      onPress={() => reactToPrintFn()}
                      startContent={
                        <PDFIcon width={16} height={16} fill="#7828c8" />
                      }
                    >
                      PDF
                    </DropdownItem>
                  </DropdownSection>
                  {userMatched ? (
                    <DropdownSection>
                      <DropdownItem
                        key="Edit"
                        
                        onPress={() => {
                          setPostId(post?._id!);
                          editModalDisclosure.onOpen();
                        }}
                        startContent={
                          <EditIcon width={16} height={16} fill="#7828c8" />
                        }
                      >
                        Edit
                      </DropdownItem>
                      <DropdownItem
                        key="Delete"
                        onPress={() => handleDeletePost(post?._id)}
                        startContent={
                          <DeleteIcon width={16} height={16} fill="#7828c8" />
                        }
                      >
                        Delete
                      </DropdownItem>
                    </DropdownSection>
                  ) : (
                    <DropdownItem className="hidden"></DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </CardHeader>

        <CardBody className="pt-0">
          <PostContentText content={post?.content} />
          {post?.images?.length > 0 && (
            <div className="max-w-xl mx-auto">
              <ImageGallery images={post?.images} />
            </div>
          )}
        </CardBody>

        <CardFooter>
          <CommentWithUpDownVotes
            post={post}
            isModalOpen={isModalOpen}

          />

          
        </CardFooter>
      </Card>
      <CreatePostModal Disclosure={editModalDisclosure} postId={postId} />
      <div className="hidden">
        <div ref={printRef} className="m-24">
          <PrintPost post={post} />
        </div>
      </div>
     
    </>
  );
}
