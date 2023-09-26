export abstract class BaseError extends Error { // criando classe para ser reutilizada ( abstract) e erda as caracteristicas do erro

    constructor(
        public statusCode: number,
        message: string) {
        super(message)
    }

} 