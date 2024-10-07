import { z } from "zod";

export const loginValidation = z.object({
  email: z
    .string()
    .nonempty("The field is required.")
    .email({ message: "Enter a valid Email." }),

  password: z
    .string()
    .nonempty("The field is required.")
    .min(6, { message: "Password mus be six charecters." }),
});
