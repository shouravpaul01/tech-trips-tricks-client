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
}
export default function TTTZPasswordInput({
  name,
  type="text",
  variant = "bordered",
  label,
  size = "md",
  isRequired = false,
  placeholder,
}: IProps) {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { register } = useFormContext();
  return (
    <Input
    {...register(name)}
    label={label}
    variant={variant}
    placeholder={placeholder}
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
