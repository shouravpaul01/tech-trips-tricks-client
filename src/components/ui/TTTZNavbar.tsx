"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Image from "next/image";
import {  useState } from "react";
import { BarIcon, LogoutdIcon } from "../icons";
import { Avatar } from "@nextui-org/avatar";
import MenuItems from "./MenuItems";
import { useUser } from "@/src/context/user.provider";
import { blankImage } from "@/src/constent";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter, useSearchParams } from "next/navigation";
import { logoutUser } from "@/src/services/AuthService";
import SearchInput from "./SearchInput";
import CreatePostButton from "@/src/app/(main)/_components/CreatePostButton";

export default function TTTZNavbar() {
  const router = useRouter();
  const searchParams=useSearchParams()
  const search=searchParams.get("search") || ""
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const handleSearch = (searchTerm: string) => {
    router.push(`/find-tech-enthusiasts?search=${searchTerm}`);
  };
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
            <Image
              src="/ttt-zone-vertical-logo.png"
              alt="ttt-zone-vertical-logo"
              width={180}
              height={20}
            />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex " justify="center">
            <div className="w-[350px]">
              <SearchInput handleSearch={handleSearch} />
            </div>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="">
              <Dropdown showArrow>
                <DropdownTrigger>
                  <div className="flex items-center gap-2">
                    <div className="text-right hidden lg:flex flex-col">
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
                    onPress={async() => {
                     await logoutUser(), setIsLoading(true), router.push("/login");
                    }}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
          
          <div className=" flex flex-col  h-screen ">
          {/* Scrollable Menu Items */}
          <div className="w-full mb-4">
                <SearchInput handleSearch={handleSearch} defaultValue={search} />
              </div>
          <div className="h-[85%] overflow-y-auto">
            <MenuItems />
          </div>

       
          <div className="px-1">
            <CreatePostButton />
            
          </div>
        </div>
            
          </NavbarMenu>
        </Navbar>
      }
    </div>
  );
}
