import { z } from "zod"

export interface LikeDislikePostInputDTO {
    token: string,
    id: string,
    like: boolean
}
export interface LikeDislikePostOutputDTO {
    message: "Interação feita com sucesso!"
}
export const LikeDislikePostSchema = z.object({
    token: z.string(),
    id: z.string(),
    like: z.boolean()
}).transform(data => data as LikeDislikePostInputDTO)
