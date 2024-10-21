"use client";
import TTTForm from "@/src/components/form/TTTZForm";
import TTTZInput from "@/src/components/form/TTTZInput";
import TTTZPasswordInput from "@/src/components/form/TTTZPasswordInput";
import { ArrowForwardIcon } from "@/src/components/icons";
import { changePasswordReq, getCurrentuser, logoutUser } from "@/src/services/AuthService";
import { TErrorMessage } from "@/src/types";
import { changePasswordValidation } from "@/src/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export default function ChangePasswordPage() {
  const router=useRouter()
  const [errors,setErrors]=useState<TErrorMessage[]>()
  const handleChangePassword: SubmitHandler<FieldValues> = async (data) => {
    const currentUser = await getCurrentuser();
    data.email = currentUser.email;
    if (!currentUser) {
      toast.error("User not found.");
      return;
    }
    const res=await changePasswordReq(data)
    if (res?.status) {
      await logoutUser();
      router.push("/login")
      toast.success(res.message)
    }
    if (res?.errorMessages?.length>0) {
      setErrors([...res.errorMessages])
    }
  };
  return (
    <div className="h-screen  flex items-center justify-center -mt-20">
      <div className="w-full md:w-6/12 shadow-md rounded-md p-8">
        <p className="font-bold text-xl mb-1">Change Password</p>
        <TTTForm
          onSubmit={handleChangePassword}
          resolver={zodResolver(changePasswordValidation)}
          errors={errors}
        >
          <div className="space-y-2">
            <TTTZInput name="email" inputProps={{ className: "hidden" }} />
            <TTTZPasswordInput
              name="oldPassword"
              variant="underlined"
              label="Old Password"
            />
            <TTTZPasswordInput
              name="password"
              variant="underlined"
              label="Password"
            />
            <TTTZPasswordInput
              name="confirmPassword"
              variant="underlined"
              label="Confirm Password"
            />
          </div>
          <div className="text-end mt-3">
            <Button
              type="submit"
              color="secondary"
              startContent={<ArrowForwardIcon />}
            >
              Update
            </Button>
          </div>
        </TTTForm>
      </div>
    </div>
  );
}
