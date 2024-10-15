import { z } from "zod";

export const updatePersonalInfoValidation=z.object({
    name:z.string().nonempty("The field is required."),
    gender:z.string().nonempty("The field is required."),
    profileImage:  z.any().optional(),
    coverImage: z.any().optional(),
    bio:z.string().max(300, { message: "Bio must be within 300 characters." }).optional(),
    address:z.string().optional(),
})