import { ReactNode } from "react";
import MenuItems from "@/src/components/ui/MenuItems";
import FilterByCheckobx from "@/src/components/ui/FilterByCheckobx";
import CreatePostButton from "./_components/CreatePostButton";
import TTTZNavbar from "@/src/components/ui/TTTZNavbar";

const Mainlayout = ({ children }: { children: ReactNode }) => {
  
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
        <div className="w-full md:w-[572px] md:ms-[290px]  h-screen ">
          <div className="h-full ">{children}</div>
        </div>

        {/* Right Sidebar fixed */}
        <div className="w-full md:w-[290px] md:ms-[862px] hidden md:flex flex-col fixed h-screen  border-s ">
          <div className="p-4 ">
            
              <FilterByCheckobx />
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Mainlayout;
