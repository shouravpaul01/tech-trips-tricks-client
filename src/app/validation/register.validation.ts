import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import { z } from "zod";

export const registerValidation=z.object({
    // name:z.string().nonempty("The field is required."),
    email:z.string().nonempty("The field is required.").email({message:"Enter a valid Email."}),
    gender:z.string().nonempty("The field is required."),
    dateOfBirth: z.preprocess((value) => {
        if (typeof value === 'object' && value !== null) {
          const { year, month, day } = value as { year: number; month: number; day: number };
          return dayjs(`${year}-${month}-${day}`, 'YYYY-M-D').add(6, 'hour').toISOString();
        }
        return value;
      }, z.string().refine(
        (date) => dayjs(date).isBefore(dayjs()),
        { message: "The date of birth must be in the past." }
      )),
    password:z.string().nonempty("The field is required.").min(6,{message:"Password mus be six charecters."}),
    confirmPassword: z
    .string()
    .nonempty("The field is required")
    
}).refine((data:any) => data.password == data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], 
  });