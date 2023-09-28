import { PostDb, PostDbWithCreatorName } from "../models/Posts";
import { BaseDatabase } from "./BaseDataBase";

export class PostDataBase extends BaseDatabase {
    public static POSTS_TABLE = "posts"
    public async creatPost(post: PostDb): Promise<void> {
        await BaseDatabase.connection(PostDataBase.POSTS_TABLE).insert(post)
    }
    public async getPosts(): Promise<PostDbWithCreatorName[]> {
        const response = await BaseDatabase.connection(PostDataBase.POSTS_TABLE).select(
            `${'users'}.name as creator_name`,
            `${PostDataBase.POSTS_TABLE}.id`,
            `${PostDataBase.POSTS_TABLE}.creator_id`,
            `${PostDataBase.POSTS_TABLE}.content`,
            `${PostDataBase.POSTS_TABLE}.likes`,
            `${PostDataBase.POSTS_TABLE}.dislikes`,
            `${PostDataBase.POSTS_TABLE}.created_at`,
            `${PostDataBase.POSTS_TABLE}.updated_at`
        )
            .join
            (
                `${'users'}`,
                `${PostDataBase.POSTS_TABLE}.creator_id`,
                "=",
                `${'users'}.id`,
            )
        return response
    }
    public async getPostId(id: string): Promise<PostDb> {
        const [response]: PostDb[] = await BaseDatabase.connection(PostDataBase.POSTS_TABLE).where({
            id
        })
        return response
    }
    public async deletePost(id: string): Promise<void> {
        await BaseDatabase.connection(PostDataBase.POSTS_TABLE).delete().where({ id })
    }
}