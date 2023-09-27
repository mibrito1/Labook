import { Request, Response } from "express";
import { ZodError } from "zod";
import { BaseError } from "../erros/BaseError";
import { CreatPostSchema } from "../dtos/posts/CreatPost.dto";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }
    public creatPost = async (req: Request, res: Response) => {
        try {
            const input = CreatPostSchema.parse({
                token: req.headers.authorization,
                content: req.body.content
            }
            )
            const output = await this.postBusiness.creatPost(input)
            res.status(201).send(output)
        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }

        }
    }


}