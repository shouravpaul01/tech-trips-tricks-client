import dayjs from "dayjs";
import { z } from "zod";

export const loginValidation = z.object({
  email: z
    .string()
    .nonempty("The field is required.")
    .email({ message: "Enter a valid Email." }),

  password: z
    .string()
    .nonempty("The field is required.")
    .min(6, { message: "Password must be six charecters." }),
});
export const registerValidation = z
  .object({
    name: z.string().nonempty("The field is required."),
    email: z
      .string()
      .nonempty("The field is required.")
      .email({ message: "Enter a valid Email." }),
    gender: z.string().nonempty("The field is required."),
    dateOfBirth: z.preprocess(
      (value) => {
        if (typeof value === "object" && value !== null) {
          const { year, month, day } = value as {
            year: number;
            month: number;
            day: number;
          };
          return dayjs(`${year}-${month}-${day}`, "YYYY-M-D")
            .add(6, "hour")
            .toISOString();
        }
        return value;
      },
      z.string().refine((date) => dayjs(date).isBefore(dayjs()), {
        message: "The date of birth must be in the past.",
      })
    ),
    password: z
      .string()
      .nonempty("The field is required.")
      .min(6, { message: "Password mus be six charecters." }),
    confirmPassword: z.string().nonempty("The field is required"),
  })
  .refine((data: any) => data.password == data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const useIdValidation = z.object({
  email: z
    .string()
    .nonempty("The field is required.")
    .email({ message: "Enter a valid Email." }),
  userId: z.string().nonempty("The field is required."),
});
export const changePasswordValidation = z
  .object({
    password: z
      .string()
      .nonempty("The field is required.")
      .min(6, { message: "Password must be six charecters." }),
    oldPassword: z
      .string()
      .nonempty("The field is required.")
      .min(6, { message: "Password must be six charecters." }),
    confirmPassword: z.string().nonempty("The field is required"),
  })
  .refine((data: any) => data.password == data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export const otpValidation = z.object({
  otp: z
    .string()
    .nonempty("The field is required.")
    .min(6, { message: "OTP must be 6-Digits" }),
});
export const resetPasswordValidation = z
  .object({
    password: z
      .string()
      .nonempty("The field is required.")
      .min(6, { message: "Password must be six charecters." }),

    confirmPassword: z.string().nonempty("The field is required"),
  })
  .refine((data: any) => data.password == data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });