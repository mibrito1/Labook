export interface LIKEDISLIKEDB {
    user_id: string,
    post_id: string,
    like: number
}

export enum POST_LIKE {
    ALREADY_LIKED = "ALREADY_LIKED",
    ALREADY_DISLIKED = "ALREADY_DISLIKED",
}
export interface PostDb {
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string
}
export interface PostDbWithCreatorName extends PostDb {
    creator_name: string
}

export interface PostModel {
    id: string,
    creatorId: string,
    content: string,
    likes: number,
    dislikes: number,
    createdAt: string,
    updatedAt: string
}
export interface PostModelWithCreatorName extends PostModel {
    creatorName: string
}
export class Post {
    constructor(
        private id: string,
        private creatorId: string,
        private content: string,
        private likes: number,
        private dislikes: number,
        private createdAt: string,
        private updatedAt: string
    ) { //simboliza o super
    }
    public getId(): string {
        return this.id
    }
    public setId(newId: string): void {
        this.id = newId
    }
    public getCreatorId(): string {
        return this.creatorId
    }
    public setCreatorId(newCreatorId: string): void {
        this.creatorId = newCreatorId
    }
    public getContent(): string {
        return this.content
    }
    public setContent(newContent: string): void {
        this.content = newContent
    }
    public getLikes(): number {
        return this.likes
    }
    public setLikes(newLikes: number): void {
        this.likes = newLikes
    }
    public getDisLikes(): number {
        return this.dislikes
    }
    public setDisLikes(newDisLikes: number): void {
        this.dislikes = newDisLikes
    }
    public getCreatedAt(): string {
        return this.createdAt
    }
    public setCreatedAt(newCreatedAt: string): void {
        this.createdAt = newCreatedAt
    }
    public getUpdatedAt(): string {
        return this.updatedAt
    }
    public setUpdatedAt(newUpdatedAt: string): void {
        this.updatedAt = newUpdatedAt
    }
    public addLike = (): void => {
        this.likes++;
    };
    public removeLike = (): void => {
        this.likes--;
    };
    public addDislike = (): void => {
        this.dislikes++;
    };
    public removeDislike = (): void => {
        this.dislikes--;
    };

    public toPostModel(): PostModel {
        return {
            id: this.id,
            creatorId: this.creatorId,
            content: this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
    public toPostDb(): PostDb {
        return {
            id: this.id,
            creator_id: this.creatorId,
            content: this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        }
    }
}
export class PostWithCreatorName extends Post {
    constructor(
        id: string,
        creatorId: string,
        content: string,
        likes: number,
        dislikes: number,
        createdAt: string,
        updatedAt: string,
        private creatorName: string
    ) {
        super(
            id, creatorId, content, likes, dislikes, createdAt, updatedAt
        )
    }
    public getCreatorName(): string {
        return this.creatorName
    }
    public setCreatorName(newCreatorName: string): void {
        this.creatorName = newCreatorName
    }

    public toPostModelWithCreatorName(): PostModelWithCreatorName {
        return {
            id: this.getId(),
            creatorId: this.getCreatorId(),
            content: this.getContent(),
            likes: this.getLikes(),
            dislikes: this.getDisLikes(),
            createdAt: this.getCreatedAt(),
            updatedAt: this.getUpdatedAt(),
            creatorName: this.getCreatorName()
        }
    }
}


