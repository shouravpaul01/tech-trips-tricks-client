"use client";

import TTTForm from "@/src/components/form/TTTZForm";
import TTTZInput from "@/src/components/form/TTTZInput";
import TTTZPasswordInput from "@/src/components/form/TTTZPasswordInput";
import { AccountBox, LoginIcon } from "@/src/components/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { loginUser } from "@/src/services/AuthService";
import { loginValidation } from "@/src/validation/auth.validation";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/user.provider";




export default function LoginPage() {
  const [authError, setAuthError] = useState<string>("");
  const {setIsLoading}=useUser()
  const searchParams=useSearchParams()
  const router=useRouter()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await loginUser(data);
    if (res?.status) {
      toast.success(res?.message)
      setAuthError('')
      setIsLoading(true)
      router.push(searchParams.get('redirect') || '/')
    }
    if (!res?.status && res?.errorMessages[0]?.path == "authError") {
      setAuthError(res.errorMessages[0].message);
    }
  };
  return (
    <div className=" ps-0 md:ps-10">
      <h1 className="text-2xl font-semibold">Login </h1>
      {authError && <p className="text-red-400">{authError}</p>}
      <TTTForm onSubmit={onSubmit} resolver={zodResolver(loginValidation)}>
        <div className="space-y-2">
          <TTTZInput
            name="email"
            type="email"
            inputProps={{variant:"underlined",label:"Email"}}
          />

          <TTTZPasswordInput
            name="password"
            variant="underlined"
            label="Password"
          />
          <Button
            type="submit"
            color="secondary"
            variant="shadow"
            radius="sm"
            className="w-full mt-3"
            startContent={<LoginIcon />}
          >
            Login
          </Button>
        </div>
      </TTTForm>

      <Link href="#" underline="always" showAnchorIcon className="ms-2 mt-2">
        Forget Password
      </Link>
      <Button
        onClick={()=>router.push("/register")}
        color="primary"
        variant="shadow"
        radius="sm"
        className="w-full mt-5 text-white"
        startContent={<AccountBox />}
      >
        Create Account
      </Button>
    </div>
  );
}
