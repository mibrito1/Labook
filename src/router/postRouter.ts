import express, { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { PostController } from "../controller/PostController";
import { PostBusiness } from "../business/PostBusiness";
import { PostDataBase } from "../dataBase/PostDataBase";


export const postRouter = express.Router()
const postControler = new PostController(new PostBusiness(
    new TokenManager(),
    new IdGenerator(),
    new PostDataBase()
))
postRouter.post("/", postControler.creatPost)

postRouter.get("/", postControler.getPost)

postRouter.delete("/:id", postControler.deletePost)