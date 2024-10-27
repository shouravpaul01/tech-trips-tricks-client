"use client"

import { TUser } from "@/src/types";
import { Chip } from "@nextui-org/chip";
import { Tab, Tabs } from "@nextui-org/tabs"
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function MenuTabs({user}:{user:TUser}) {
  const router=useRouter()
  const pathname=usePathname()
  console.log(user,"MenuTabs")

  return (
    <div className="flex w-full flex-col">
       <Tabs size="md" variant="underlined" color="secondary" aria-label="Tabs sizes" classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-secondary",
          tab: "max-w-fit px-0 h-12 font-semibold",
          tabContent: "group-data-[selected=true]:text-secondary"
        }}
        selectedKey={pathname}
            onSelectionChange={(key: any) =>router.push(key)}>
          <Tab key={`/profile/${user?.userId}`} title="Posts"/>
          <Tab key={`/profile/${user?.userId}/following`}  title={<div className="flex items-center space-x-2">
            
              <span>Following</span>
              <Chip size="sm" variant="faded">{user?.following?.length}</Chip>
            </div>}/>
          <Tab key={`/profile/${user?.userId}/follower`} title={<div className="flex items-center space-x-2">
            
            <span>Followers</span>
            <Chip size="sm" variant="faded">{user?.followers?.length}</Chip>
          </div>}/>
        </Tabs>
    </div>
  )
}
