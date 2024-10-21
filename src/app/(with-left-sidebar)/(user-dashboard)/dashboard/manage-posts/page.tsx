"use client";
import {
  DeleteIcon,
  EditIcon,
  InfoIcon,
  PostIcon,
  RestoreSingleIcon,
  SearchIcon,
  ThumbDownkIcon,
  ThumbUpkIcon,
} from "@/src/components/icons";
import CreatePostModal from "@/src/components/modals/CreatePostModal";
import PostDetailsModal from "@/src/components/modals/PostDetailsModal";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import { useUser } from "@/src/context/user.provider";

import { useDeletePost, useGetAllPosts, useRestorePost } from "@/src/hooks/PostHook";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Input } from "@nextui-org/input";
import { useDisclosure } from "@nextui-org/modal";
import { Pagination } from "@nextui-org/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Tooltip } from "@nextui-org/tooltip";
import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export default function ManagePostsPage() {
  const { user } = useUser();

  const [page, setPage] = useState(1);
  const [postId, setPostId] = useState("");
  const detailsDisclosure = useDisclosure();
  const editDisclosure = useDisclosure();
  const router = useRouter();

  const searchParams = useSearchParams();
  const isTrashTab = searchParams.get("isDeleted") || false;
  const selectedKey = isTrashTab ? "trash" : "manage";

  const { data, isLoading, refetch } = useGetAllPosts({
    page: page,
    queryArgs: [
      { label: "user", value: user?._id },
      { label: "isDeleted", value: isTrashTab },
    ],
  });
  const { mutate: handleDeletePost } = useDeletePost();
  const { mutate: handleRestorePost } = useRestorePost()
  const totalPages = data?.totalPages || 0;
  const loadingState =
    isLoading || data?.data?.length === 0 ? "loading" : "idle";

  return (
    <div className="mt-3">
      <div className="flex items-center bg-secondary-100 py-2 px-3 rounded-md">
        <p className="flex-1 font-bold">{isTrashTab == "true" ? "Trash" : "All"} Posts</p>
        <div>
          <Tabs
            aria-label="Options"
            size="sm"
            variant="bordered"
            color="secondary"
            selectedKey={selectedKey}
            onSelectionChange={(key: any) => {
              if (key === "trash") {
                router.push("/dashboard/manage-posts?isDeleted=true");
              } else {
                router.push("/dashboard/manage-posts");
              }
            }}
          >
            <Tab
              key="manage"
              title={
                <div className="flex items-center space-x-2">
                  <PostIcon fill="#FFFFFF" />
                  <span>Manage Posts</span>
                </div>
              }
            />

            <Tab
              key="trash"
              title={
                <div className="flex items-center space-x-2">
                  <DeleteIcon fill="#f31260" />
                  <span>Trash</span>
                </div>
              }
            />
          </Tabs>
        </div>
      </div>

      <Table
        isStriped
        aria-label="Example static collection table"
        radius="sm"
        shadow="none"
        bottomContent={
          totalPages > 0 ? (
            <div className="flex w-full ">
              <Pagination
                showControls
                radius="full"
                color="secondary"
                page={page}
                total={totalPages}
                onChange={(page) => setPage(page)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader>
          <TableColumn>Content</TableColumn>
          <TableColumn>Comment/Upvote/Downvote</TableColumn>

          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody
          items={data?.data ?? []}
          loadingContent={<TTTZLoading />}
          loadingState={loadingState}
          emptyContent={<p>Data not found.</p>}
        >
          {(item) => (
            <TableRow key={item._id}>
              <TableCell width={350}>
                <div>
                  <div className="flex gap-6 mb-1">
                    <p>
                      Type :{" "}
                      <Chip
                        color="warning"
                        size="sm"
                        classNames={{ content: "font-bold " }}
                      >
                        {item.type}
                      </Chip>
                    </p>
                    <p>
                      Category :{" "}
                      <Chip
                        color="warning"
                        size="sm"
                        classNames={{ content: "font-bold " }}
                      >
                        {item.category}
                      </Chip>
                    </p>
                  </div>
                  <div
                    className={`mb-2 text-justify ${"line-clamp-3"}`}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></div>
                </div>
              </TableCell>
              <TableCell>
                <div className="">
                  <p className="font-semibold">
                    Comments:{" "}
                    <Chip color="success">{item?.comments?.length}</Chip>
                  </p>
                  <p className="font-semibold flex gap-1 items-center">
                    Upvote: <Chip color="success">{item?.upvotes}</Chip>
                    <ThumbUpkIcon />
                  </p>
                  <p className="font-semibold flex gap-1 items-center">
                    Downvote: <Chip color="danger">{item?.downvotes}</Chip>{" "}
                    <ThumbDownkIcon />
                  </p>
                </div>{" "}
              </TableCell>

              <TableCell>
                <div className="flex gap-2 items-center">
                  {isTrashTab ? (
                    <Tooltip showArrow content="Restore" color="success">
                      <Button
                        isIconOnly
                        variant="flat"
                        color="success"
                        radius="full"
                        size="sm"
                        onPress={() => handleRestorePost(item._id)}
                      >
                        <RestoreSingleIcon
                          fill="#07ab30"
                          width={20}
                          height={20}
                        />
                      </Button>
                    </Tooltip>
                  ) : (
                    <Tooltip showArrow content="Edit" color="secondary">
                      <Button
                        isIconOnly
                        variant="flat"
                        color="secondary"
                        radius="full"
                        size="sm"
                        onPress={() => {
                          setPostId(item._id), editDisclosure.onOpen();
                        }}
                      >
                        <EditIcon fill="#7828c8" width={20} height={20} />
                      </Button>
                    </Tooltip>
                  )}
                  <Tooltip showArrow content="Details" color="secondary">
                    <Button
                      isIconOnly
                      variant="flat"
                      color="secondary"
                      radius="full"
                      size="sm"
                      onPress={() => {
                        setPostId(item._id), detailsDisclosure.onOpen();
                      }}
                    >
                      <InfoIcon fill="#7828c8" width={26} height={26} />
                    </Button>
                  </Tooltip>
                  {
                    !isTrashTab && <Tooltip showArrow content="Delete" color="danger">
                    <Button
                      isIconOnly
                      variant="flat"
                      color="danger"
                      radius="full"
                      size="sm"
                      onPress={() => handleDeletePost(item._id)}
                    >
                      <DeleteIcon fill="#EA3323" width={20} height={20} />
                    </Button>
                  </Tooltip>
                  }
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <PostDetailsModal postId={postId} Disclosure={detailsDisclosure} />
      <CreatePostModal postId={postId} Disclosure={editDisclosure} />
    </div>
  );
}
