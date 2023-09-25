export enum userRole {
    Admin = "Admin",
    Normal = "Normal"
}

export interface UserDb {
    id: string,
    name: string,
    email: string,
    password: string,
    role: userRole,
    created_at: string

}
export interface UserModel {
    id: string,
    name: string,
    email: string,
    password: string,
    role: userRole,
    createdAt: string
}

export class Users {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: userRole,
        private createdAt: string

    ) { }

    public getId(): string {
        return this.id
    }
    public setId(newId: string): void {   // void é algo vazio, que nao existe
        this.id = newId
    }

    public getName(): string {
        return this.name
    }
    public setName(newName: string): void {   // void é algo vazio, que nao existe
        this.name = newName
    }

    public getEmail(): string {
        return this.email
    }
    public setEmail(newEmail: string): void {   // void é algo vazio, que nao existe
        this.email = newEmail
    }

    public getPassword(): string {
        return this.password
    }
    public setPassword(newPassword: string): void {   // void é algo vazio, que nao existe
        this.password = newPassword
    }

    public getRole(): userRole {
        return this.role
    }
    public setRole(newRole: userRole): void {   // void é algo vazio, que nao existe
        this.role = newRole
    }

    public getCreatedAt(): string {
        return this.createdAt
    }
    public setCreatedAt(newCreatedAt: string): void {   // void é algo vazio, que nao existe
        this.createdAt = newCreatedAt
    }

    public toUserDb(): UserDb {
        return {
            created_at: this.createdAt,
            id: this.id,
            email: this.email,
            name: this.name,
            password: this.password,
            role: this.role
        }
    }

    public toUserModel(): UserModel {
        return {
            createdAt: this.createdAt,
            id: this.id,
            email: this.email,
            name: this.name,
            password: this.password,
            role: this.role
        }

    }
}




