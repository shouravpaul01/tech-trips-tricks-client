import { z } from "zod";

export const createCommentValidation=z.object({
    text:z.string({required_error:"The field is required."}),
})
export const updateCommentValidation=z.object({
    commentId:z.string({required_error:"The field is required."}),
    text:z.string({required_error:"The field is required."}),
})