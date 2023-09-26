import { error } from "console";
import { UserDataBase } from "../dataBase/UserDataBase";
import { SignupInputDTO, SignupOutputDTO } from "../dtos/users/signup.dto";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Users, userRole } from "../models/Users";
import { TokenManager, TokenPayload } from "../services/TokenManager";

export class UserBusiness {  // aqui vai tratar as regras do negocio, as regras do projeto
    constructor(private idGenerator: IdGenerator,
        private userDataBase: UserDataBase,
        private hashManager: HashManager,
        private tokenManager: TokenManager
    ) {

    }
    public signup = async (input: SignupInputDTO): Promise<SignupOutputDTO> => {
        const {
            name, email, password
        } = input
        const id = this.idGenerator.generate()
        const userExist = await this.userDataBase.getUserByEmail(email)
        if (
            userExist
        ) {
            throw new Error(
                "usuario ja existe"
            )
        }
        const passwordSec = await this.hashManager.hash(password)
        const user = new Users(id, name, email, passwordSec, userRole.Normal, new Date().toISOString())
        await this.userDataBase.signup(user.toUserDb())
        const tokenPayload: TokenPayload = {
            id: user.getId(),
            name: user.getName(),
            role: user.getRole()
        }
        const token = this.tokenManager.createToken(tokenPayload)
        const output: SignupOutputDTO = {
            message: "usuario registrado com sucesso",
            token: token


        }
        return output
    }

}

