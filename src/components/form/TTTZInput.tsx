"use client";
import { Input, InputProps } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  type?: string;
 
  inputProps?:InputProps
  onValueChange?: (value: string) => void
}
export default function TTTZInput({
  name,
  type = "text",
  
  onValueChange,
inputProps
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      type={type}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      {...inputProps}
      onValueChange={onValueChange}
    
   
    />
  );
}
