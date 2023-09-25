import { v4 } from 'uuid'

export class IdGenerator {  //gera uma string aleatoria

    public generate = (): string => {
        return v4()
    }
}
