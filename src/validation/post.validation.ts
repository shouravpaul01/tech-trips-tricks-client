import { z } from "zod";

export const postValidation=z.object({
    category:z.string({required_error:"Select Category."}),
    content:z.string({required_error:"The field is required."})
    
})