"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BarIcon, LogoutdIcon, SearchIcon } from "../icons";
import { Avatar } from "@nextui-org/avatar";
import { motion } from "framer-motion";
import MenuItems from "./MenuItems";
import { useUser } from "@/src/context/user.provider";
import { blankImage } from "@/src/constent";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/src/services/AuthService";

export default function TTTZNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setIsLoading } = useUser();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <div className="relative">
      {
        <Navbar
          isBordered
          classNames={{
            wrapper: "max-w-6xl",
            toggle: "bg-secondary w-10 h-10 rounded-full bg-opacity-30",
          }}
          className="fixed "
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarMenuToggle
            icon={<BarIcon />}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            {/* <div className="me-2 block md:hidden">
              <Button
                isIconOnly
                color="secondary"
                variant="flat"
                radius="full"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                {<BarIcon />}
              </Button>
            </div> */}
            <Image
              src="/ttt-zone-vertical-logo.png"
              alt="ttt-zone-vertical-logo"
              width={180}
              height={20}
            />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4 " justify="center">
            <Input
              classNames={{
                base: "max-w-full  h-10 ",
                mainWrapper: "h-full ",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-full",
              }}
              placeholder="Type to search..."
              size="sm"
              endContent={<SearchIcon size={18} />}
              type="search"
            />
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Dropdown>
                <DropdownTrigger>
                  <div className="flex items-center gap-2">
                    <div className="text-right ">
                      <p className="font-bold">{user?.name}</p>
                      <p className="text-gray-400 text-sm -mt-[4px]">
                        @{user?.userId}
                      </p>
                    </div>
                    <Avatar
                      isBordered
                      color="primary"
                      size="sm"
                      src={user?.profileImage || blankImage}
                    />
                  </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem
                    key="logout"
                    variant="flat"
                    color="secondary"
                    classNames={{ base: "font-bold" }}
                    startContent={<LogoutdIcon fill="#7828c8" />}
                    onClick={() => {
                      logoutUser(), setIsLoading(true), router.push("/login");
                    }}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            <div>
              <MenuItems/>
            </div>
          </NavbarMenu>
        </Navbar>
      }
     
    </div>
  );
}
