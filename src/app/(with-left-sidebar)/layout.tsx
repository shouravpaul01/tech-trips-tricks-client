
import { ReactNode } from "react";
import MenuItems from "@/src/components/ui/MenuItems";
import CreatePostModal from "@/src/components/modals/CreatePostModal";
import FilterByCheckobx from "@/src/components/ui/FilterByCheckobx";

const WithLeftSidebar = ({ children }: { children: ReactNode }) => {
  
  return (
    <div className="my-container mt-16">
      <div className="flex ">
        {/* Left Sidebar (Fixed) */}

        <div className="w-[290px] flex flex-col fixed h-screen border-e p-2">
          {/* Scrollable Menu Items */}

          <div className="h-[80%] overflow-y-auto">
            <MenuItems />
          </div>

       
          <div className="px-1">
            <CreatePostModal />
            
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full  md:ms-[290px]  h-screen ">
          <div className="h-full ">{children}</div>
        </div>

      </div>
    </div>
  );
};

export default WithLeftSidebar;

