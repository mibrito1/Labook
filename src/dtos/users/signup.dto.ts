import z from "zod"

export interface SignupInputDTO {
    email: string,
    password: string,
    name: string
}
export interface SignupOutputDTO {
    message: string,
    token: string
}
export const SignupSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6)
}).transform((data) => data as SignupInputDTO)