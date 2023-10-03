import jwt from 'jsonwebtoken'
import { userRole } from '../models/Users'
import dotenv from "dotenv"
dotenv.config()

export interface TokenPayload {  // aqui define os tipos de dados
    id: string,
    name: string,
    role: userRole  //funçao
}

export class TokenManager {

    public createToken = (payload: TokenPayload): string => {  //tem que ser igual ao que esta no tokenpayload
        const token = jwt.sign( //metodo para criar token
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN //quantos dias o token dura
            }
        )

        return token
    }

    public getPayload = (token: string): TokenPayload | null => {
        try {
            const payload = jwt.verify( // verifica se é verdadeiro
                token,
                process.env.JWT_KEY as string,
            )

            return payload as TokenPayload

        } catch (error) {
            return null
        }
    }
}