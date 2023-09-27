import express, { Request, Response } from "express";
import { UserController } from "../controller/UserController";
import { UserBusiness } from "../business/UserBusiness";
import { IdGenerator } from "../services/IdGenerator";
import { UserDataBase } from "../dataBase/UserDataBase";
import { HashManager } from "../services/HashManager";
import { TokenManager } from "../services/TokenManager";


export const userRouter = express.Router()
const userController = new UserController(
    new UserBusiness(
        new IdGenerator(),
        new UserDataBase(),
        new HashManager(),
        new TokenManager()
    )
)  //instancia
userRouter.get("/", userController.oiMirian)

userRouter.post('/signup', userController.signup)

userRouter.post('/login', userController.login)
