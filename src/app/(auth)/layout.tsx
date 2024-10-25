"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { ReactNode } from "react";


export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {(pathname == "/login" || pathname == "/register") && (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
          <div className="w-full md:max-w-4xl flex flex-col md:flex-row bg-white rounded-xl p-10 ">
            <div className="w-full md:w-1/2 flex items-center">
              <div className="">
                <Image
                  src="/ttt-zone-logo.png"
                  width={400}
                  height={400}
                  alt="icon"
                  priority={false}
                />
              </div>
            </div>
            <div className="border border-dashed border-secondary-200 hidden md:block"></div>
            <div className="w-full md:w-1/2">{children}</div>
          </div>
        </div>
      )}
      {(pathname == "/user_name" || pathname == "/find-account" || pathname == "/confirm-identity") && (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
          
            
            {children}
        
        </div>
      )}
    </>
  );
}
