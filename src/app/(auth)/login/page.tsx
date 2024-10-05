"use client";

import TTTForm from "@/src/components/form/TTTZForm";
import TTTZInput from "@/src/components/form/TTTZInput";
import TTTZPasswordInput from "@/src/components/form/TTTZPasswordInput";
import { AccountBox, LoginIcon } from "@/src/components/icons";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function LoginPage() {
  const onSubmit = () => {};
  return (
    <div className=" ps-0 md:ps-10">
      <h1 className="text-2xl font-semibold">Login </h1>

      <TTTForm onSubmit={onSubmit}>
        <div className="space-y-2">
          <TTTZInput
            name="email"
            type="email"
            variant="underlined"
            label="Email"
          />

          <TTTZPasswordInput
            name="password"
            variant="underlined"
            label="Password"
          />
          <Button
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
      href="/register"
      as={Link}
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
