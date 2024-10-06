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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registerValidation } from "../../validation/register.validation";
import registerUser from "../../services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";


export default function RegisterPage() {

  const {mutate:handleRegister,data,error} = useMutation({
    mutationKey:["USER_RESTRATION"],
    mutationFn: async(data) => await registerUser(data),
    onSuccess:(data)=>{
      console.log("onSuccess",data)
      if (!!data?.errorMessages) {
        
        data?.errorMessages?.forEach((err: { path: string; message: string }) => {
            // Use the path to set the error for the corresponding field
           
          });
       
      }
    },
    onError:(error, variables, context)=>{
      console.log("onERR",error.cause, variables, context)
    }
  })
  
  const onSubmit: SubmitHandler<FieldValues> =async (data) => {
   
    console.log(data)
     handleRegister(data)
    
  };
  return (
    <div className=" ps-0 md:ps-10">
      <h1 className="text-2xl font-semibold">Create a New Account </h1>

      <TTTForm onSubmit={onSubmit}  resolver={zodResolver(registerValidation)}>
      {(formMethods) => (
          <>
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
                <TTTZSelect
                  name="gender"
                  variant="underlined"
                  label="Gender"
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
              >
                Register
              </Button>
            </div>
          </>
        )}
      </TTTForm>

      
      <div className="mt-2">
      <Link href="/login" showAnchorIcon >
        Already have an account?
      </Link>
      <p className="text-xs text-gray-400 mt-1">By clicking Register, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
        </div>
      
    </div>
  );
}
