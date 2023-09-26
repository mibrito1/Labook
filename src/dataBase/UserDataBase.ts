import { promises } from "dns";
import { UserDb } from "../models/Users";
import { BaseDatabase } from "./BaseDataBase";

export class UserDataBase extends BaseDatabase {
    public static USERS_TABLE = "users"
    public async signup(
        user: UserDb
    ) {
        await BaseDatabase.connection(UserDataBase.USERS_TABLE).insert(user)

    }
    public async getUserByEmail(email: string): Promise<UserDb> {
        const [response]: UserDb[] = await BaseDatabase.connection(UserDataBase.USERS_TABLE).where({
            email
        })
        return response
    }

}