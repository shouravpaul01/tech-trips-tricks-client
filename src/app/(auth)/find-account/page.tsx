"use client";
import TTTForm from "@/src/components/form/TTTZForm";
import TTTZInput from "@/src/components/form/TTTZInput";
import { XmarkIcon } from "@/src/components/icons";
import { blankImage } from "@/src/constent";
import {
  cencelResetPasswordProcces,
  sendOTPReq,
} from "@/src/services/AuthService";
import { getSingleUserByEmailReq } from "@/src/services/UserService";
import { TUser } from "@/src/types";
import { findAccountValidation } from "@/src/validation/user.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function FindAccountPage() {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const [user, setUser] = useState<Partial<TUser> | null>();
  const handleFindAccount: SubmitHandler<FieldValues> = async (data) => {
    const res = await getSingleUserByEmailReq(data.email);
    if (res?.status && res?.data) {
      setUser(res.data);
      setError('')
    }
    if (!res?.status && res?.errorMessages) {
      setError(res?.errorMessages[0]?.message);
      setUser(null);
    }
  };
  const handleSendOTP = async (email: string) => {
    const res = await sendOTPReq(email);
    if (res?.status && res?.data) {
      router.push("/confirm-identity");
    }
    if (!res?.status && res?.errorMessages) {
      setError(res?.errorMessages[0]?.message);
    }
  };
  
  return (
    <div className="bg-white w-full md:max-w-md rounded-md p-5">
      <p className="font-bold text-xl">Find your account..</p>
      <p className="font-semibold text-gray-400">
        Please enter your email address to search for your account.
      </p>
      {error && (
        <Chip
          color="danger"
          variant="light"
          classNames={{
            content: "p-0",
            closeButton: "text-black text-xl ms-5",
          }}
          onClose={() => setError("")}
        >
          {error}
        </Chip>
      )}
      <TTTForm
        onSubmit={handleFindAccount}
        resolver={zodResolver(findAccountValidation)}
      >
        <TTTZInput
          name="email"
          inputProps={{
            variant: "underlined",
            label: "Email",
            placeholder: "example@gmail.com",
          }}
        />
        {user && (
          <div className="flex items-center mt-5">
            <div className="flex flex-1 gap-3">
              <Avatar
                isBordered
                radius="full"
                src={user?.profileImage || blankImage}
              />
              <div>
                <p className="font-bold">{user?.name}</p>
                <p className="font-semibold text-gray-400 -mt-1">
                  @{user?.userId}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                className="bg-black"
                isIconOnly
                radius="full"
                onPress={() => setUser(null)}
              >
                <XmarkIcon />
              </Button>
              <Button
                color="secondary"
                onPress={() => handleSendOTP(user?.email!)}
              >
                Send OTP
              </Button>
            </div>
          </div>
        )}
        <div className="text-right space-x-2 mt-3">
          <Button
            variant="faded"
            color="secondary"
            onPress={() => cencelResetPasswordProcces()}
          >
            Cencel
          </Button>
          {!user && (
            <Button type="submit" color="secondary">
              Submit
            </Button>
          )}
        </div>
      </TTTForm>
      <div></div>
    </div>
  );
}
