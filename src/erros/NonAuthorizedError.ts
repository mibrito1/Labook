import { BaseError } from "./BaseError";

export class NonAuthorizedError extends BaseError {
    constructor(
        message: string = "Voce não tem autorização"
    ) {
        super(401, message)
    }
}