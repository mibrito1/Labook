import { PostDataBase } from "../dataBase/PostDataBase";
import { CreatPostInputDTO, CreatPostOutputDTO } from "../dtos/posts/CreatPost.dto";
import { NonAuthorizedError } from "../erros/NonAuthorizedError";
import { Post } from "../models/Posts";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager, TokenPayload } from "../services/TokenManager";


export class PostBusiness {
    constructor(
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator,
        private postDataBase: PostDataBase
    ) {

    }
    public creatPost = async (input: CreatPostInputDTO): Promise<CreatPostOutputDTO> => {
        const {
            token, content
        } = input
        const tokenPayload: TokenPayload | null = this.tokenManager.getPayload(token)
        if (
            !tokenPayload
        ) {
            throw new NonAuthorizedError()
        }
        const id = this.idGenerator.generate()
        const newPost = new Post(
            id,
            tokenPayload.id,
            content,
            0,
            0,
            new Date().toISOString(),
            new Date().toISOString()
        )
        await this.postDataBase.creatPost(newPost.toPostDb())
        return
    }
}
