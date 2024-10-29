"use client";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { AboutIcon, DashboardIcon, GroupAddIcon, HomeIcon, PremiumIcon, ProfileIcon } from "../icons";
import { IconWrapper } from "./IconWrapper";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import Link from "next/link";


export default function MenuItems() {
  const {user}=useUser()

  const iconClasses =
    " text-xl text-default-500 pointer-events-none  flex-shrink-0";
    
  return (
    <div className="font-semibold">
      <Listbox color="secondary" variant="flat"  aria-label="Listbox menu with icons">
        <ListboxItem
          key="Home"
          href={"/"}
          as={Link}
          classNames={{
            
            title: "font-semibold text-md flex items-center",
          }}
          startContent={<IconWrapper className="bg-primary/10 text-primary">
            <HomeIcon className={iconClasses} fill="#634FA2"/>
          </IconWrapper>}
        >
          Home
        </ListboxItem>
        <ListboxItem
          key="find-tech-enthusiasts"
          href={"/find-tech-enthusiasts"}
          as={Link}
          classNames={{
            
            title: "font-semibold text-md flex items-center",
          }}
          startContent={<IconWrapper className="bg-primary/10 text-primary">
            <GroupAddIcon className={iconClasses} />
          </IconWrapper>}
        >
          Find tech enthusiasts
        </ListboxItem>
        <ListboxItem
          key="Premium"
          href={"/premium"}
          as={Link}
          classNames={{
            
            title: "font-semibold text-md flex items-center",
          }}
          startContent={<IconWrapper className="bg-primary/10 text-primary">
            <PremiumIcon className={iconClasses} fill="#17c964"/>
          </IconWrapper>}
        >
          Premium
        </ListboxItem>
        <ListboxItem
          key="Profile"
          href={`/profile/${user?.userId}`}
          as={Link}
         
          classNames={{
            
            title: "font-semibold text-md flex items-center",
          }}
          startContent={<IconWrapper className="bg-primary/10 text-primary">
            <ProfileIcon className={iconClasses} />
          </IconWrapper>}
        >
          Profile
        </ListboxItem>
        <ListboxItem
          key="About"
          href={"/about"}
          as={Link}
         
          classNames={{
            
            title: "font-semibold text-md flex items-center",
          }}
          startContent={<IconWrapper className="bg-primary/10 text-primary">
            <AboutIcon fill="#D16D6A" className={iconClasses} />
          </IconWrapper>}
        >
          About us
        </ListboxItem>
        <ListboxItem
          key="dashboard"
          href={"/dashboard"}
          as={Link}
          classNames={{
            
            title: "font-semibold text-md flex items-center",
          }}
          startContent={<IconWrapper className="bg-primary/10 text-primary">
            <DashboardIcon fill="#000000" width={20} height={20} className={iconClasses} />
          </IconWrapper>}
        >
          Dashboard
        </ListboxItem>
        {
          user?.role=="Admin" ? <ListboxItem
          key="admin-dashboard"
          href={"/admin-dashboard"}
          as={Link}
          classNames={{
            
            title: "font-semibold text-md flex items-center",
          }}
          startContent={<IconWrapper className="bg-primary/10 text-primary">
            <DashboardIcon fill="#000000" width={20} height={20} className={iconClasses} />
          </IconWrapper>}
        >
          Admin-Dashboard
        </ListboxItem>:<ListboxItem key={""} className="hidden"></ListboxItem>
        }
      </Listbox>
    </div>
  );
}
