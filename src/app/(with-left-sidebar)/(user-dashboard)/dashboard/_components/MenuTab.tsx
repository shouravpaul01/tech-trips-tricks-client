"use client"
import { DashboardIcon, EyeFilledIcon, EyeSlashFilledIcon, PasswordIcon, PostIcon } from "@/src/components/icons";
import { Tab, Tabs } from "@nextui-org/tabs";
import { usePathname, useRouter } from "next/navigation";


export default function MenuTab() {
    const router=useRouter()
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
        onSelectionChange={(key:any)=>router.push(key)}
      >
        <Tab
          key="/dashboard"
          
          title={
            <div className="flex items-center space-x-2 ">
              <DashboardIcon fill="#7828c8"/>
              <span>Dashboard</span>
              
            </div>
          }
          
        />
        <Tab
          key="/dashboard/manage-posts"
          title={
            <div className="flex items-center space-x-2">
              <PostIcon />
              <span>Manage Posts</span>
             
            </div>
          }
          
       
        />
        <Tab
          key="/dashboard/change-password"
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
