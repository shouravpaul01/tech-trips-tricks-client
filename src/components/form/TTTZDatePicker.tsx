"use client";
import { DatePicker } from "@nextui-org/date-picker";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  label?: string;
  size?: "sm" | "md" | "lg";
}
export default function TTTZDatePicker({
  name,
  variant = "bordered",
  label,
  size = "md",
}: IProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          errorMessage={errors[name] ? (errors[name].message as string) : ""}
          isInvalid={!!errors[name]}
          label={label}
          size={size}
          variant={variant}
          hideTimeZone
          showMonthAndYearPickers
        />
      )}
    />
  );
}
