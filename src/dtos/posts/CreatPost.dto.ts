import z from "zod"


export interface CreatPostInputDTO {
    token: string,
    content: string
}

export type CreatPostOutputDTO = undefined

export const CreatPostSchema = z.object({
    token: z.string(),
    content: z.string().min(1)
}).transform((data) => data as CreatPostInputDTO)
