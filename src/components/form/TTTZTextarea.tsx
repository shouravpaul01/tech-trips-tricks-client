"use client";
import { Textarea, TextAreaProps } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  textAreaProps?: TextAreaProps;

}
export default function TTTZTextArea({
  name,
  textAreaProps,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Textarea
      {...register(name)}
      {...textAreaProps}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      
    />
  );
}
