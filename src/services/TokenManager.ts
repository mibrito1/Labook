import jwt from 'jsonwebtoken'
import { userRole } from '../models/Users'

export interface TokenPayload {  // aqui define os tipos de dados
    id: string,
    name: string,
    role: userRole  //funçao
}

export class TokenManager {

    public createToken = (payload: TokenPayload): string => {  //tem que ser igual ao que esta no tokenpayload
        const token = jwt.sign( //metodo para criar token
            payload,
            "senhaSegura",
            {
                expiresIn: "7d"  //quantos dias o token dura
            }
        )

        return token
    }

    public getPayload = (token: string): TokenPayload | null => {
        try {
            const payload = jwt.verify( // verifica se é verdadeiro
                token,
                "senhaSegura",
            )

            return payload as TokenPayload

        } catch (error) {
            return null
        }
    }
}