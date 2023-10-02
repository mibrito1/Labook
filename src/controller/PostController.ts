import { Request, Response } from "express";
import { ZodError } from "zod";
import { BaseError } from "../erros/BaseError";
import { CreatPostSchema } from "../dtos/posts/CreatPost.dto";
import { PostBusiness } from "../business/PostBusiness";
import { GetPostSchema } from "../dtos/posts/GetPost.dto";
import { DeletePostSchema } from "../dtos/posts/DeletePost.dto";
import { EditPostSchema } from "../dtos/posts/EditPost.dto";
import { LikeDislikePostSchema } from "../dtos/posts/LikeDislikePost.dto";

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
    public getPost = async (req: Request, res: Response) => {
        try {
            const input = GetPostSchema.parse({
                token: req.headers.authorization,

            }
            )
            const output = await this.postBusiness.getPost(input)
            res.status(200).send(output.posts)
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
    public deletePost = async (req: Request, res: Response) => {
        try {
            const input = DeletePostSchema.parse({
                token: req.headers.authorization,
                id: req.params.id
            }
            )
            const output = await this.postBusiness.deletePost(input)
            res.status(200).send(output.message)
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
    public editPost = async (req: Request, res: Response) => {
        try {
            const input = EditPostSchema.parse({
                token: req.headers.authorization,
                id: req.params.id,
                content: req.body.content
            }
            )
            const output = await this.postBusiness.editPost(input)
            res.status(200).send(output.message)
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
    public likeDislikePost = async (req: Request, res: Response) => {
        try {
            const input = LikeDislikePostSchema.parse({
                token: req.headers.authorization,
                id: req.params.id,
                like: req.body.like
            }
            )
            const output = await this.postBusiness.likeDislikePost(input)
            res.status(200).send(output.message)
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