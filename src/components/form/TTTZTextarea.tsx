"use client";
import { Input, InputProps, Textarea, TextAreaProps } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  type?: string;
 
  textAreaProps?:TextAreaProps
  
}
export default function TTTZTextArea({
  name,
  
  textAreaProps
  

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
