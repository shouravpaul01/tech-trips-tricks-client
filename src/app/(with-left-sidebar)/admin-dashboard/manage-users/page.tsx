"use client";
import { EditIcon, InfoIcon, VerifiedIcon } from "@/src/components/icons";
import SearchInput from "@/src/components/ui/SearchInput";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import { noImage } from "@/src/constent";
import { useTitle } from "@/src/hooks";
import {
  useGetAllUsers,
  useUpdateUserActiveStatus,
  useUpdateUserRole,
} from "@/src/hooks/UserHook";
import { TUpdateRoleQuery } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Pagination } from "@nextui-org/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import dayjs from "dayjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ManageUsersPage() {
  useTitle("Manage-Users");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search")
    ? { label: "search", value: searchParams.get("search") }
    : null;
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllUsers({ page, queryArgs: [search] });
  const { mutate: updateRole } = useUpdateUserRole();
  const { mutate: updateActiveStatus } = useUpdateUserActiveStatus();
  const totalPages = data?.totalPages || 0;
  const loadingState = isLoading ? "loading" : "idle";
  const handleSearch = (searchTerm: string) => {
    router.push(`${pathname}?search=${searchTerm}`);
  };
  return (
    <div className="my-6">
      <div className="max-w-xs ms-4">
        <SearchInput
          handleSearch={handleSearch}
          defaultValue={search?.value!}
        />
      </div>
      <Table
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
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>Block/Unblock</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody
          items={data?.data ?? []}
          loadingContent={<TTTZLoading />}
          loadingState={loadingState}
          emptyContent={<p>Data not found.</p>}
        >
          {(item) => (
            <TableRow key={item._id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div>
                    <Badge
                      isOneChar
                      content={<VerifiedIcon />}
                      color="success"
                      placement="bottom-right"
                    >
                      <Avatar
                        isBordered
                        color="success"
                        radius="full"
                        src={item.profileImage}
                      />
                    </Badge>
                  </div>
                  <Tooltip
                    showArrow
                    content={
                      item.isSubscribed ? (
                        <div className="px-1 py-2">
                          <div className="text-small font-bold flex gap-2">
                            User Verified <VerifiedIcon />
                          </div>
                          <div>
                            <p className="font-bold underline">Subcription:</p>
                            <p>
                              Plan:{" "}
                              <span className="font-semibold">
                                {item.subscription.plan.toUpperCase()}
                              </span>
                            </p>
                            <p>
                              Start Date:{" "}
                              <span className="font-semibold">
                                {dayjs(item.subscription.startDate).format(
                                  "MMMM D, YYYY"
                                )}
                              </span>
                            </p>
                            <p>
                              End Date:{" "}
                              <span className="font-semibold">
                                {dayjs(item.subscription.endDate).format(
                                  "MMMM D, YYYY"
                                )}
                              </span>
                            </p>
                          </div>
                        </div>
                      ) : (
                        "User not verified"
                      )
                    }
                  >
                    <div>
                      <p>{item.name}</p>
                      <p>@{item.userId}</p>
                      <p>Email:{item.email}</p>
                    </div>
                  </Tooltip>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <Chip color="default">{item.role}</Chip>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        isIconOnly
                        variant="faded"
                        color="secondary"
                        radius="full"
                        size="sm"
                      >
                        <EditIcon fill="#7828c8" width={16} height={16} />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem
                        key="User"
                        onPress={() =>
                          item.role !== "User" &&
                          updateRole({ email: item.email, role: "User" })
                        }
                      >
                        User
                      </DropdownItem>
                      <DropdownItem
                        key="Admin"
                        onPress={() =>
                          item.role !== "Admin" &&
                          updateRole({ email: item.email, role: "Admin" })
                        }
                      >
                        Admin
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>{" "}
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <Chip color={item.isActive ? "success" : "danger"}>
                    {item.isActive ? "Unblock" : "Block"}
                  </Chip>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        isIconOnly
                        variant="faded"
                        color="secondary"
                        radius="full"
                        size="sm"
                      >
                        <EditIcon fill="#7828c8" width={16} height={16} />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem
                        key="block"
                        onPress={() =>
                          item.isActive &&
                          updateActiveStatus({
                            email: item.email,
                            isActive: false,
                          })
                        }
                      >
                        Block
                      </DropdownItem>
                      <DropdownItem
                        key="unblock"
                        onPress={() =>
                          !item.isActive &&
                          updateActiveStatus({
                            email: item.email,
                            isActive: true,
                          })
                        }
                      >
                        Unblock
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>{" "}
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <Button
                    isIconOnly
                    variant="faded"
                    color="secondary"
                    radius="full"
                    size="sm"
                  >
                    <InfoIcon fill="#7828c8" width={26} height={26} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
