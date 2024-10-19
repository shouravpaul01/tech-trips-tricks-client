
import { ReactNode } from "react";
import MenuItems from "@/src/components/ui/MenuItems";
import CreatePostButton from "../(main)/_components/CreatePostButton";
import TTTZNavbar from "@/src/components/ui/TTTZNavbar";


const WithLeftSidebar = ({ children }: { children: ReactNode }) => {
  
  return (
   <>
    <TTTZNavbar />
    <div className="my-container mt-16">
      <div className="flex ">
        {/* Left Sidebar (Fixed) */}

        <div className="w-[290px] hidden md:flex flex-col fixed h-screen border-e p-2">
          {/* Scrollable Menu Items */}

          <div className="h-[80%] overflow-y-auto">
            <MenuItems />
          </div>

       
          <div className="px-1">
            <CreatePostButton />
            
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full  md:ms-[290px]  h-screen ">
          <div className="h-full ">{children}</div>
        </div>

      </div>
    </div>
   </>
  );
};

export default WithLeftSidebar;

