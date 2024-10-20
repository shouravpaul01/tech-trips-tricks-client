"use client"
import TTTForm from "@/src/components/form/TTTZForm";
import TTTZPasswordInput from "@/src/components/form/TTTZPasswordInput";
import { ArrowForwardIcon } from "@/src/components/icons";
import { Button } from "@nextui-org/button";

export default function ChangePasswordPage() {
  const handleChangePassword = () => {};
  return (
    <div className="h-screen  flex items-center justify-center -mt-20">
      <div className="w-full md:w-6/12 shadow-md rounded-md p-8">
      <p className="font-bold text-xl mb-1">Change Password</p>
      <TTTForm onSubmit={handleChangePassword}>
        <div className="space-y-2">
          <TTTZPasswordInput name="currentPassword" variant="underlined" label="Current Password"/>
          <TTTZPasswordInput name="password" variant="underlined" label="Password"/>
          <TTTZPasswordInput name="confirmPassword" variant="underlined" label="Confirm Password"/>
        </div>
        <div className="text-end mt-3">
        <Button color="secondary" startContent={<ArrowForwardIcon/>}>Update</Button>
        </div>
      </TTTForm>
      </div>
    </div>
  );
}
