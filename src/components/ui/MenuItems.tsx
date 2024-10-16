"use client";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { HomeIcon, PremiumIcon, ProfileIcon } from "../icons";
import { IconWrapper } from "./IconWrapper";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";


export default function MenuItems() {
  const router=useRouter()
  const {user}=useUser()

  const iconClasses =
    " text-xl text-default-500 pointer-events-none  flex-shrink-0";
    
  return (
    <div className="font-semibold">
      <Listbox color="secondary" variant="flat"  aria-label="Listbox menu with icons">
        <ListboxItem
        onClick={()=>router.push("/")}
          key="Home"
          classNames={{
            
            title: "font-semibold text-md flex items-center",
          }}
          startContent={<IconWrapper className="bg-primary/10 text-primary">
            <HomeIcon className={iconClasses} />
          </IconWrapper>}
        >
          Home
        </ListboxItem>
        <ListboxItem
          key="Premium"
          onClick={()=>router.push(`/premium`)}
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
          onClick={()=>router.push(`/profile/${user?.userId}`)}
          classNames={{
            
            title: "font-semibold text-md flex items-center",
          }}
          startContent={<IconWrapper className="bg-primary/10 text-primary">
            <ProfileIcon className={iconClasses} />
          </IconWrapper>}
        >
          Profile
        </ListboxItem>
      </Listbox>
    </div>
  );
}
