"use client"
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../icons";

interface IProps {
  name: string;
  type?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  label?: string;
  size?: "sm" | "md" | "lg";
  isRequired?: boolean;
  placeholder?: string;
  props?:any
}
export default function TTTZPasswordInput({
  name,
  type="text",
  variant = "bordered",
  label,
  size = "md",
  isRequired = false,
  placeholder,
props
}: IProps) {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { register,formState:{errors} } = useFormContext();
  return (
    <Input
    {...register(name)}
    errorMessage={errors[name]?(errors[name]?.message as string):""}
    isInvalid={!!errors[name]}
    label={label}
    variant={variant}
    placeholder={placeholder}
    {...props}
    endContent={
      <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
        {isVisible ? (
          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
        ) : (
          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
        )}
      </button>
    }
    type={isVisible ? "text" : "password"}
    
  />
  );
}
