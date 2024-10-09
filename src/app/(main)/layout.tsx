import TTTZNavbar from "@/src/components/ui/TTTZNavbar";
import { ReactNode } from "react";
import MenuItems from "@/src/components/ui/MenuItems";

const Mainlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <TTTZNavbar />
      <div className="my-container">
        <div className="flex ">
          {/* Left Sidebar (Fixed) */}
          <div className=" w-[290px] hidden md:block fixed h-screen p-1">
           
           
              <MenuItems />
              
            
          </div>

          {/* Main Content */}
          <div className="w-full md:w-[572px] md:ms-[290px] p-5 h-screen border-x">{children}</div>

          {/* Right Sidebar (Sticky) */}
          <div className="w-[290px] hidden md:block">
            {/* <div className="sticky top-0 h-screen">
              <MenuItems />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
