"use client";
import TTTForm from "@/src/components/form/TTTZForm";
import TTTZInput from "@/src/components/form/TTTZInput";
import TTTZPasswordInput from "@/src/components/form/TTTZPasswordInput";
import {
    cencelResetPasswordProcces,
  getResetDetails,
  matchedOTPReq,
  resetPasswordReq,
  sendOTPReq,
} from "@/src/services/AuthService";
import { resetPasswordValidation } from "@/src/validation/auth.validation";
import { otpValidation } from "@/src/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { EmailIcon } from "react-share";
import { toast } from "sonner";

export default function ConfirmIdentityPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const [error, setError] = useState<string>();
  const handleConfirmIdentity: SubmitHandler<FieldValues> = async (data) => {
    const resetDetails = await getResetDetails();
    const res = await matchedOTPReq({
      email: resetDetails.email,
      otp: data.otp,
    });
    if (res.status && res?.data) {
      router.push("/confirm-identity?tab=reset_password");
    }
    if (!res?.status && res?.errorMessages) {
      setError(res?.errorMessages[0]?.message);
    }
  };
  const handleSendOTP = async () => {
    const resetDetails = await getResetDetails();
    const res = await sendOTPReq(resetDetails.email!);

    if (res?.status && res?.data) {
      toast.success(res?.message);
      setError('')
    }
    if (!res?.status && res?.errorMessages) {
      setError(res?.errorMessages[0]?.message);
    }
  };
  const handleResetPassword: SubmitHandler<FieldValues> = async (data) => {
    const resetDetails = await getResetDetails();
    if (resetDetails) {
        router.push("/confirm-identity");
    }
    const res = await resetPasswordReq({
      email: resetDetails.email!,
      otp: resetDetails.otp,
      password: data.password,
    });
    if (res?.status && res?.data) {
      router.push("/login");
      toast.success(res?.message);
    }
    if (!res?.status && res?.errorMessages) {
      setError(res?.errorMessages[0]?.message);
    }
  };
  return (
    <div className="bg-white w-full md:max-w-md rounded-md p-5">
      {tab == "reset_password" ? (
        <div>
          <p className="font-bold text-xl">Reset Password</p>
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
            onSubmit={handleResetPassword}
            resolver={zodResolver(resetPasswordValidation)}
          >
            <div className="space-y-2 max-w-xs">
              <TTTZPasswordInput
                name="password"
                label="Password"
                variant="underlined"
              />
              <TTTZPasswordInput
                name="confirmPassword"
                label="Confirm Password"
                variant="underlined"
              />

              <div className="mt-2">
                <Button type="submit" color="secondary" size="md">
                  Submit
                </Button>
              </div>
            </div>
          </TTTForm>
        </div>
      ) : (
        <div>
          <p className="font-bold text-xl">Enter OTP code</p>
          <p className="font-semibold text-gray-400">
            Please check your emails for a message with your code. Your code is
            6 numbers long.
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
            onSubmit={handleConfirmIdentity}
            resolver={zodResolver(otpValidation)}
          >
            <div className="flex gap-2 my-3">
              <div>
                <TTTZInput
                  name="otp"
                  type="number"
                  inputProps={{
                    variant: "bordered",

                    placeholder: "6-Digits",
                    width: "max-w-xl",
                    size: "md",
                  }}
                />
                <Link
                  underline="hover"
                  className="ms-2"
                  onPress={() => handleSendOTP()}
                >
                  OTP Send Again
                </Link>
              </div>

              <Button type="submit" color="secondary" size="md">
                Submit
              </Button>
            </div>
          </TTTForm>
        </div>
      )}
      <div className="text-right ">
        <Button variant="faded" color="secondary" onPress={()=>cencelResetPasswordProcces()}>
          Cencel
        </Button>
      </div>
    </div>
  );
}
