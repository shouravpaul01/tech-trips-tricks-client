"use client";
import { Input } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  type?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  label?: string;
  className?:string;
  isRequired?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}
export default function TTTZInput({
  name,
  type = "text",
  variant = "bordered",
  label,
  className ,
  onChange,
...props
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      type={type}
      variant={variant}
      label={label}
      onChange={onChange}
    className={className}
    {...props}
    />
  );
}
