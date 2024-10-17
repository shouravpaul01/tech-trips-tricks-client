import { z } from "zod";

export const postValidation=z.object({
    type:z.string({required_error:"Select Category."}),
    category:z.string({required_error:"Select Category."}),
    content:z.string({required_error:"The field is required."})
    
})