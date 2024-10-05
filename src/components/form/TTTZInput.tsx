"use client"
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  type?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  label?: string;
  size?: "sm" | "md" | "lg";
  isRequired?: boolean;
  placeholder?: string;
}
export default function TTTZInput({
  name,
  type="text",
  variant = "bordered",
  label,
  size = "md",
  isRequired = false,
  placeholder,
}: IProps) {
  const { register } = useFormContext();
  return (
    <Input
      {...register(name)}
      type={type}
      variant={variant}
      label={label}
      size={size}
      isRequired={isRequired}
      radius="sm"
      placeholder={placeholder}
    />
  );
}
