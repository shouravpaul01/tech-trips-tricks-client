import Image from "next/image";
import { ReactNode } from "react";
// import ttt_zone_icon from "@/public/ttt-zone-logo.png";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="flex flex-col md:flex-row bg-white rounded-xl p-10 ">
        <div className="w-full md:w-1/2 flex items-center">
          <div className="">
            
          <Image src="/ttt-zone-logo.png" width={400} height={400} alt="icon"/>
          </div>
        </div>
        <div className="border border-dashed border-secondary-200 hidden md:block"></div>
        <div className="w-full md:w-1/2">
            {children}
        </div>
      </div>
    </div>
  );
}
