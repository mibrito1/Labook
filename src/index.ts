import express from "express"
import cors from "cors"
import { userRouter } from "./router/userRouter"
import { postRouter } from "./router/postRouter"
import dotenv from "dotenv"
dotenv.config()

const api = express()
api.use(express.json()) //transforma dados em json (textos)
api.use(cors())
api.listen(Number(process.env.PORT), () => {
    console.log("listeng on 3003")
})

api.get("/", () => {
    console.log("Estou no /")
})
api.use("/user", userRouter)  //redireciona para o userRouter, sem o () é uma referencia somente. Com () executaria a funçao
api.use("/post", postRouter)
