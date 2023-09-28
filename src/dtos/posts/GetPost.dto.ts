import z from "zod";
import { PostModelWithCreatorName } from "../../models/Posts";

export interface GetPostInputDTO {
    token: string,
}
export interface GetPostOutputDTO {
    posts: PostModelWithCreatorName[]
}
export const GetPostSchema = z.object({
    token: z.string()
}).transform(data => data as GetPostInputDTO)
