import { PostDataBase } from "../dataBase/PostDataBase";
import { CreatPostInputDTO, CreatPostOutputDTO } from "../dtos/posts/CreatPost.dto";
import { DeletePostInputDTO, DeletePostOutputDTO } from "../dtos/posts/DeletePost.dto";
import { GetPostInputDTO, GetPostOutputDTO } from "../dtos/posts/GetPost.dto";
import { BadError } from "../erros/BadError";
import { NonAuthorizedError } from "../erros/NonAuthorizedError";
import { Post, PostWithCreatorName } from "../models/Posts";
import { userRole } from "../models/Users";
import { userRouter } from "../router/userRouter";
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
    public getPost = async (input: GetPostInputDTO): Promise<GetPostOutputDTO> => {
        const {
            token
        } = input
        const tokenPayload: TokenPayload | null = this.tokenManager.getPayload(token)
        if (
            !tokenPayload
        ) {
            throw new NonAuthorizedError()
        }

        const posts = await this.postDataBase.getPosts()
        const postsModel = posts.map(post => {

            return new PostWithCreatorName(
                post.id,
                post.creator_id,
                post.content,
                post.likes,
                post.dislikes,
                post.created_at,
                post.updated_at,
                post.creator_name
            )
                .toPostModelWithCreatorName()
        })
        const output = { posts: postsModel }
        return output
    }
    public deletePost = async (input: DeletePostInputDTO): Promise<DeletePostOutputDTO> => {
        const {
            token, id
        } = input
        const tokenPayload: TokenPayload | null = this.tokenManager.getPayload(token)
        if (
            !tokenPayload
        ) {
            throw new NonAuthorizedError()
        }
        const post = await this.postDataBase.getPostId(id)
        if (
            !post
        ) {
            throw new BadError("Post não existe!")
        }
        if (
            post.creator_id !== tokenPayload.id && tokenPayload.role !== userRole.Admin
        ) {
            throw new NonAuthorizedError()
        }
        await this.postDataBase.deletePost(id)
        const output = { message: "Post apagado com suesso!" }
        return output
    }
}
