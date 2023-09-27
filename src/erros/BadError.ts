import { BaseError } from "./BaseError";

export class BadError extends BaseError {
    constructor(
        message: string = "Requisição invalida!"
    ) {
        super(400, message)
    }

}