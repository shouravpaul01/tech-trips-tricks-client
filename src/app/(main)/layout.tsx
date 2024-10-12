import TTTZNavbar from "@/src/components/ui/TTTZNavbar";
import { ReactNode } from "react";
import MenuItems from "@/src/components/ui/MenuItems";
import Logout from "@/src/components/ui/Logout";
import { Button } from "@nextui-org/button";
import CreatePostModal from "@/src/components/modals/CreatePostModal";

const Mainlayout = ({ children }: { children: ReactNode }) => {
 
  return (
    <div className="">
      <TTTZNavbar />
      <div className="my-container">
        <div className="flex ">
          {/* Left Sidebar (Fixed) */}

          <div className="w-[290px] flex flex-col fixed h-screen p-2">
            {/* Scrollable Menu Items */}
           
            <div className="h-[80%] overflow-y-auto">
              <MenuItems />
            
            </div>

            {/* Logout Button at Bottom */}
            <div className="px-1">
            <CreatePostModal/>
             {/* <Logout/> */}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-[572px] md:ms-[290px]  h-screen border-x">
            {children}
          </div>

          {/* Right Sidebar (Sticky) */}
          <div className="w-[290px] hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
