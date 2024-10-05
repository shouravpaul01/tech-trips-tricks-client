"use client"
import TTTForm from "@/src/components/form/TTTZForm";
import TTTZInput from "@/src/components/form/TTTZInput";
import TTTZPasswordInput from "@/src/components/form/TTTZPasswordInput";
import TTTZSelect from "@/src/components/form/TTTZSelect";
import { AccountBox } from "@/src/components/icons";
import { genderOptions } from "@/src/constent";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function RegisterPage() {
  const onSubmit = () => {};
  return (
    <div className=" ps-0 md:ps-10">
      <h1 className="text-2xl font-semibold">Create a New Account </h1>

      <TTTForm onSubmit={onSubmit}>
        <div className="space-y-2">
        <TTTZInput
            name="name"
            type="text"
            variant="underlined"
            label="Full Name"
          />
          <TTTZInput
            name="email"
            type="email"
            variant="underlined"
            label="Email"
          />
<div className="flex gap-5">
  <TTTZSelect name="gender" variant="underlined" label="Gender" options={genderOptions}/>
</div>
        <div className="flex gap-5">
        <TTTZPasswordInput
            name="password"
            variant="underlined"
            label="Password"
          />
            <TTTZPasswordInput
            name="password"
            variant="underlined"
            label="Confirm Password"
          />
        </div>
           <Button
        color="primary"
        variant="shadow"
        radius="sm"
        className="w-full mt-5 text-white"
        startContent={<AccountBox />}
      >
        Register
      </Button>
        </div>
      </TTTForm>

      <Link href="/login"  showAnchorIcon className="ms-2 mt-2">
        Already have an account?
      </Link>
     
    </div>
  );
}
