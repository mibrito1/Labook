import { z } from "zod"

export interface EditPostInputDTO {
    content: string,
    token: string,
    id: string
}
export interface EditPostOutputDTO {
    message: string
}
export const EditPostSchema = z.object({
    token: z.string(),
    content: z.string(),
    id: z.string()
}).transform(data => data as EditPostInputDTO)
