import { cn } from "@nextui-org/theme";
import { ReactNode } from "react";


export const IconWrapper = ({children, className}:{children:ReactNode,className:string}) => (
  <div className={cn(className, "flex items-center rounded-small justify-center w-7 h-7")}>
    {children}
  </div>
);