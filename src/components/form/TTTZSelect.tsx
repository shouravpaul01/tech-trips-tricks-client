"use client"
import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  type?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  label?: string;
  size?: "sm" | "md" | "lg";
  isRequired?: boolean;
  placeholder?: string;
  options:{key:string,label:string}[]
}
export default function TTTZSelect({
  name,
  
  variant = "bordered",
  label,
  size = "md",
  isRequired = false,
  placeholder,
  options
}: IProps) {
  const { register,formState:{errors} } = useFormContext();
  return (
    <Select 
    {...register(name)}
    errorMessage={errors[name]?(errors[name].message as string):""}
    isInvalid={!!errors[name]}
    variant={variant}
    label={label}
    size={size}
    isRequired={isRequired}
    radius="sm"
    placeholder={placeholder}
          >
            {options.map((option) => (
              <SelectItem  key={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
  );
}
