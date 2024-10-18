"use client"
import { DashboardIcon, UserGroupIcon } from "@/src/components/icons";
import { Chip } from "@nextui-org/chip";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useRouter } from "next/navigation";

export default function MenuTab() {
    const router=useRouter()
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
        onSelectionChange={(key)=>{
            key=="admin-dashboard" && router.push("/admin-dashboard")
            key=="manage-users" && router.push("/admin-dashboard/manage-users")
        }}
      >
        <Tab
          key="admin-dashboard"
          title={
            <div className="flex items-center space-x-2 ">
              <DashboardIcon fill="#7828c8"/>
              <span>Dashboard</span>
              
            </div>
          }
          onClick={()=>router.push("/admin-dashboard")}
        />
        <Tab
          key="manage-users"
          title={
            <div className="flex items-center space-x-2">
              <UserGroupIcon />
              <span>Manage Users</span>
             
            </div>
          }
          
          onClick={()=>router.push("/admin-dashboard/manage-users")}
        />{" "}
        
      </Tabs>
    </div>
  );
}
