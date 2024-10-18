"use client";
import { EditIcon, InfoIcon, VerifiedIcon } from "@/src/components/icons";
import TTTZLoading from "@/src/components/ui/TTTZLoading";
import { noImage } from "@/src/constent";
import { useGetAllUsers, useUpdateUserRole } from "@/src/hooks/UserHook";
import { TUpdateRoleQuery } from "@/src/types";
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
import { User } from "@nextui-org/user";
import { useState } from "react";

export default function ManageUsersPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllUsers();
  const { mutate: updateRole } = useUpdateUserRole();
  const totalPages = data?.totalPages || 0;
  const loadingState =
    isLoading || data?.data.length === 0 ? "loading" : "idle";
  const handleUpdateRole = (data: TUpdateRoleQuery) => {
    updateRole(data);
    console.log(data);
  };
  return (
    <div>
      <Table
        aria-label="Example static collection table"
        radius="sm"
        shadow="none"
        bottomContent={
          totalPages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                showControls
                showShadow
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
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody
          items={data?.data ?? []}
          loadingContent={<TTTZLoading />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={item._id}>
              <TableCell>
                <Badge
                  content={
                    <VerifiedIcon
                      fill={item.isSubscribed ? "#0000F5" : "#666666"}
                    />
                  }
                  variant="faded"
                  placement="top-left"
                >
                  <Tooltip
                    content={
                      item.isSubscribed ? "User verified" : "User not verified"
                    }
                  >
                    <User
                      name={item.name}
                      description={
                        <div>
                          <span className="text-gray-400">
                            Email:{item.email}
                          </span>
                        </div>
                      }
                      avatarProps={{
                        isBordered: true,
                        src: { ...(item.profileImage as any) },
                      }}
                    />
                  </Tooltip>
                </Badge>
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
                          handleUpdateRole({ email: item.email, role: "User" })
                        }
                      >
                        User
                      </DropdownItem>
                      <DropdownItem
                        key="Admin"
                        onPress={() =>
                          item.role !== "Admin" &&
                          handleUpdateRole({ email: item.email, role: "Admin" })
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
