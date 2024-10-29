"use client";
import TTTZDatePicker from "@/src/components/form/TTTZDatePicker";
import TTTForm from "@/src/components/form/TTTZForm";
import TTTZInput from "@/src/components/form/TTTZInput";
import TTTZPasswordInput from "@/src/components/form/TTTZPasswordInput";
import TTTZSelect from "@/src/components/form/TTTZSelect";
import { AccountBox } from "@/src/components/icons";
import { genderOptions } from "@/src/constent";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { registerValidation } from "@/src/validation/auth.validation";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { registerUser } from "@/src/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { TErrorMessage } from "@/src/types";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const { setIsLoading } = useUser();
  const [errors, setErrors] = useState<TErrorMessage[]>([]);

  const { mutate: handleRegister, isPending } = useMutation({
    mutationKey: ["USER_RESTRATION"],
    mutationFn: async (data: FieldValues) => await registerUser(data),
    onSuccess: (data) => {
      if (data?.status) {
        setErrors([]);
        setIsLoading(true);
        router.push(`/user_name`);
      }
      if (!!data?.errorMessages) {
        setErrors([...data?.errorMessages]);
      }
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    handleRegister(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full md:max-w-4xl flex flex-col md:flex-row bg-white rounded-xl shadow-small p-10 ">
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
        <div className="w-full md:w-1/2">
          <div className=" ps-0 md:ps-10">
            <h1 className="text-2xl font-semibold">Create a New Account </h1>
            {errors[0]?.path === "userError" && (
              <p className="text-red-500">{errors[0]?.message}</p>
            )}
            <TTTForm
              onSubmit={onSubmit}
              resolver={zodResolver(registerValidation)}
              errors={errors}
            >
              <div className="space-y-2">
                <TTTZInput
                  name="name"
                  type="text"
                  inputProps={{ variant: "underlined", label: "Name" }}
                />
                <TTTZInput
                  name="email"
                  type="email"
                  inputProps={{ variant: "underlined", label: "Email" }}
                />
                <div className="flex gap-5">
                  <TTTZSelect
                    name="gender"
                    selectProps={{ variant: "underlined", label: "Gender" }}
                    options={genderOptions}
                  />
                  <TTTZDatePicker
                    name="dateOfBirth"
                    label="Date Of Birth"
                    variant="underlined"
                  />
                </div>
                <div className="flex gap-5 mb-4">
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
              </div>
              <div className="mt-5">
                <Button
                  type="submit"
                  color="secondary"
                  variant="shadow"
                  radius="sm"
                  className="w-full text-white"
                  startContent={<AccountBox />}
                  isDisabled={isPending}
                >
                  Register
                </Button>
              </div>
            </TTTForm>

            <div className="mt-2">
              <Link href="/login" showAnchorIcon>
                Already have an account?
              </Link>
              <p className="text-xs text-gray-400 mt-1">
                By clicking Register, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
</div>
  );
}
