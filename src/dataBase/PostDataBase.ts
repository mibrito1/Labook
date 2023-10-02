import { LIKEDISLIKEDB, POST_LIKE, PostDb, PostDbWithCreatorName } from "../models/Posts";
import { BaseDatabase } from "./BaseDataBase";

export class PostDataBase extends BaseDatabase {
    public static POSTS_TABLE = "posts"
    public static LIKE_TABLE = "like_dislike"

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

    public async editPost(post: PostDb, id: string): Promise<void> {
        await BaseDatabase.connection(PostDataBase.POSTS_TABLE).update(post).where({
            id
        })
    }
    public async creatLikeDislikePost(likeDislike: LIKEDISLIKEDB): Promise<void> {
        await BaseDatabase.connection(
            PostDataBase.LIKE_TABLE
        ).insert(likeDislike)
    }
    public async findLikeDislikePost(likeDislike: LIKEDISLIKEDB): Promise<POST_LIKE | undefined> {
        const [response] = await BaseDatabase.connection(
            PostDataBase.LIKE_TABLE
        ).where({
            post_id: likeDislike.post_id,
            user_id: likeDislike.user_id
        })
        if (response === undefined) {
            return undefined
        } else if (response.like === 1) {
            return POST_LIKE.ALREADY_LIKED
        } else {
            return POST_LIKE.ALREADY_DISLIKED
        }
    }
    public async removeLikeDislikePost(likeDislike: LIKEDISLIKEDB): Promise<void> {
        await BaseDatabase.connection(
            PostDataBase.LIKE_TABLE
        ).del().where({
            post_id: likeDislike.post_id,
            user_id: likeDislike.user_id
        })
    }
    public async updateLikeDislikePost(likeDislike: LIKEDISLIKEDB): Promise<void> {
        await BaseDatabase.connection(
            PostDataBase.LIKE_TABLE
        ).update(likeDislike).where({
            post_id: likeDislike.post_id,
            user_id: likeDislike.user_id
        })
    }

}