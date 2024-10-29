"use client"
import { DashboardIcon,PasswordIcon, PostIcon } from "@/src/components/icons";
import { Tab, Tabs } from "@nextui-org/tabs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function MenuTab() {
    const pathname=usePathname()

  return (
    <div className="flex w-full flex-col">
      <Tabs
       
        color="secondary"
        variant="underlined"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider bg-white",
          cursor: "w-full bg-secondary ",
          tab: "max-w-fit px-3 h-12",
          tabContent: "group-data-[selected=true]:text-secondary ",
        }}
        
        selectedKey={pathname}
        
      >
        <Tab
          key="/dashboard"
          href="/dashboard"
          as={Link}
          title={
            <div className="flex items-center space-x-2 ">
              <DashboardIcon fill="#7828c8"/>
              <span>Dashboard</span>
              
            </div>
          }
          
        />
        <Tab
          key="/dashboard/manage-posts"
          href="/dashboard/manage-posts"
          as={Link}
          title={
            <div className="flex items-center space-x-2">
              <PostIcon />
              <span>Manage Posts</span>
             
            </div>
          }
          
       
        />
        <Tab
          key="/dashboard/change-password"
          href="/dashboard/change-password"
          as={Link}
          title={
            <div className="flex items-center space-x-2">
              <PasswordIcon />
              <span>Change Password</span>
             
            </div>
          }
          
       
        />{" "}
      </Tabs>
      
    </div>
  );
}
