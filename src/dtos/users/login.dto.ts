import z from "zod"

export interface LoginInputDTO {
    email: string,
    password: String  // aqui tipei a entrada de dados
}

export interface LoginOutputDTO {
    message: string,
    token: string         // tipando o retorno
}

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
}).transform((data) => data as LoginInputDTO)

