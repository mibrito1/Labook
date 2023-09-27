import { PostDb } from "../models/Posts";
import { BaseDatabase } from "./BaseDataBase";

export class PostDataBase extends BaseDatabase {
    public static POSTS_TABLE = "posts"
    public async creatPost(post: PostDb): Promise<void> {
        await BaseDatabase.connection(PostDataBase.POSTS_TABLE).insert(post)
    }
}