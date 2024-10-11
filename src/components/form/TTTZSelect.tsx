"use client";
import { Select, SelectItem, SelectProps } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  selectProps?: SelectProps | {};
  options: { key: string; label: string }[];
}
export default function TTTZSelect({ name, selectProps, options }: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Select
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      {...selectProps}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
