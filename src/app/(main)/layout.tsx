import TTTZNavbar from "@/src/components/ui/TTTZNavbar";
import { ReactNode } from "react";
import MenuItems from "@/src/components/ui/MenuItems";

const Mainlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <TTTZNavbar />
      <div className="my-container flex">
     
      <div className="w-72 h-screen  border-x  p-5 fixed">
         <MenuItems/>
        
      </div>

      {/* Main Content */}
      <div className="ml-72 p-5 w-full h-screen">
        {children}
      </div>
    </div>
    </div>
  );
};

export default Mainlayout;
