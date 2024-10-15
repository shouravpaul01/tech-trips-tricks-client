import { ReactNode } from "react";
import MenuItems from "@/src/components/ui/MenuItems";
import Logout from "@/src/components/ui/Logout";
import { Button } from "@nextui-org/button";
import CreatePostModal from "@/src/components/modals/CreatePostModal";
import FilterByCheckobx from "@/src/components/ui/FilterByCheckobx";

const Mainlayout = ({ children }: { children: ReactNode }) => {
  
  return (
    <div className="my-container mt-16">
      <div className="flex ">
        {/* Left Sidebar (Fixed) */}

        <div className="w-[290px] flex flex-col fixed h-screen border-e p-2">
          {/* Scrollable Menu Items */}

          <div className="h-[80%] overflow-y-auto">
            <MenuItems />
          </div>

          {/* Logout Button at Bottom */}
          <div className="px-1">
            <CreatePostModal />
            {/* <Logout/> */}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-[572px] md:ms-[290px]  h-screen ">
          <div className="h-full ">{children}</div>
        </div>

        {/* Right Sidebar (Sticky) */}
        <div className="w-full md:w-[290px] md:ms-[862px] flex flex-col fixed h-screen  border-s ">
          <div className="p-4 ">
            
              <FilterByCheckobx />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
