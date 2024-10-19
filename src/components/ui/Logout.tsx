"use client"
import { Button } from "@nextui-org/button";
import React from "react";
import { LogoutdIcon } from "../icons";
import { useUser } from "@/src/context/user.provider";
import { logoutUser } from "@/src/services/AuthService";
import { useRouter } from "next/navigation";

export default function Logout() {
    const {setIsLoading}=useUser()
    const router=useRouter()
  return (
    <>
      <Button
        variant="shadow"
        color="secondary"
        className="w-full"
        startContent={<LogoutdIcon />}
        onClick={()=>{logoutUser(),setIsLoading(true),router.push('/login')}}
     
      >
        Logout
      </Button>
    </>
  );
}
