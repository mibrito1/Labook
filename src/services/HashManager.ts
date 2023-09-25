import bcrypt from 'bcryptjs'


export class HashManager {
    public hash = async (
        plaintext: string // paintex é a senha do usuario
    ): Promise<string> => {           // toda funçao async sempre devolve uma promessa, porque o dado ainda nao esta pronto
        const rounds = 12     // numero de rodadas para misturar
        const salt = await bcrypt.genSalt(rounds)  // caracteres aleatorios
        const hash = await bcrypt.hash(plaintext, salt)  // resultado da mistura

        return hash
    }

    public compare = async (
        plaintext: string,
        hash: string
    ): Promise<boolean> => {
        return bcrypt.compare(plaintext, hash)  // compara tudo pra ver se esta tudo igual, se der diferente retorna false
    }
}
