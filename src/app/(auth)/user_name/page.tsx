"use client";
import TTTForm from "@/src/components/form/TTTZForm";
import TTTZInput from "@/src/components/form/TTTZInput";
import { ArrowForwardIcon } from "@/src/components/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useIdValidation } from "@/src/validation/auth.validation";
import { useUser } from "@/src/context/user.provider";
import { isExistsUserId, updateUserId } from "@/src/services/AuthService";
import { useState } from "react";
import { TErrorMessage } from "@/src/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function UserNamePage() {
  const { user } = useUser();
  
  const router = useRouter();
  const [userIdError, setUserIdError] = useState<TErrorMessage | {}>({});
  const { mutate: handleUserId,isPending } = useMutation({
    mutationKey: ["USER_NAME"],
    mutationFn: async (data: FieldValues) => await updateUserId(data),
    onSuccess: (data) => {
    
      if (data?.status) {
        
        router.push("/");
        toast.success(data?.message);
      }
      if (!!data?.errorMessages) {
        setUserIdError(data.errorMessages[0]);
      }
    },
  });
  const handleUserIdInput = async (value: string) => {
    setUserIdError({});
    const res = await isExistsUserId({ email: user?.email, userId: value });
    if (res?.errorMessages?.length > 0) {
      setUserIdError(res.errorMessages[0]);
    }
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
    handleUserId(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">What Should we call you? </h1>
      <p className="text-gray-500">
        Your "user_name" is unique.You can change it later.
      </p>
      <TTTForm
        onSubmit={onSubmit}
        resolver={zodResolver(useIdValidation)}
        defaultValues={{ email: user?.email, userId: user?.userId }}
      >
        <div className="space-y-2">
          <TTTZInput name="email" type="email" inputProps={{className:"max-w-xs hidden"}} />
          <TTTZInput
            name="userId"
            type="text"
            inputProps={{variant:"underlined",label:"User Name",className:"max-w-xs "}}
            
            
            onValueChange={(value) => handleUserIdInput(value)}
          />
          {Object.keys(userIdError).length > 0 && (
            <p
              className={`${(userIdError as TErrorMessage).path == "available" ? "text-red-400" : "text-green-500"}`}
            >
              {(userIdError as TErrorMessage).message}
            </p>
          )}
        </div>

        <div className="mt-5 flex gap-3">
          <Button color="secondary" variant="bordered" radius="sm" onClick={()=> {router.push("/"),toast.success("Successfully Done.")}}>
            Skip Now
          </Button>
          <Button
            type="submit"
            color="secondary"
            variant="shadow"
            radius="sm"
            className=" text-white "
            isDisabled={
              (userIdError as TErrorMessage).path == "available" ? true : false
            }
            startContent={<ArrowForwardIcon />}
            
          >
            Next
          </Button>
        </div>
      </TTTForm>
    </div>
  );
}
