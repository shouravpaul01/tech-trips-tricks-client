"use client";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";
import { HomeIcon, PremiumIcon, ProfileIcon } from "../icons";
import { IconWrapper } from "./IconWrapper";

export default function MenuItems() {
  const iconClasses =
    " text-xl text-default-500 pointer-events-none  flex-shrink-0";
  return (
    <div className="font-semibold">
      <Listbox variant="faded" aria-label="Listbox menu with icons">
        <ListboxItem
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
          classNames={{
            
            title: "font-semibold text-md flex items-center",
          }}
          startContent={<IconWrapper className="bg-primary/10 text-primary">
            <PremiumIcon className={iconClasses} />
          </IconWrapper>}
        >
          Premium
        </ListboxItem>
        <ListboxItem
          key="Profile"
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
