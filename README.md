# Labook
É um projeto de estudo é uma rede social com o objetivo de promover a conexão e interação entre pessoas. Quem se cadastrar no aplicativo poderá criar e curtir publicações

[Documentação da API](https://documenter.getpostman.com/view/27685153/2s9YJdV2Ec)

## OBJETIVO DA API
> API criada para projeto de estudo durante o curso da Labenu.

##  **EndPoints**

A API oferece os seguintes endpoints:

1. **Signup**: Permite a criaçao de um novo usuario.

2. **Login**: Permite a autenticação de um usuario.

3. **CreatePost**: Permite a criação de um post.

4. **GetPosts**: Permite a vizualização dos posts.

5. **EditPosts**: Permite Editar os posts.

6. **DeletePosts**: Permite remover um post.

7. **Likes e Dislikes**: Permite a interaçao de like e dislike em um post.

## **Tecnologias Utilizadas:**

- [NodeJS](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [SQLite 3](https://www.sqlite.org/)
- [Knex](https://knexjs.org/)
- [UUID](https://www.npmjs.com/package/uuid)
- [BcryptJS](https://www.npmjs.com/package/bcryptjs)
- [JWT](https://jwt.io/)
- [ZOD](https://zod.dev/)

## **Instruções para utilizar a API**

```js
-- Clone o repositório do projeto com o comando: git clone https://github.com/mibrito1/Labook.git

-- Entre na pasta criada pelo comando a cima.

-- Instale as dependencias.

-- Crie um arquivo DataBase. Ex: labook.db

-- Realize a coneção do banco de dados.

-- Execute a criação das tabelas. Os comandos estão disponiveis no arquivo SQL.

-- Crie o arquivo de variáveis .env

-- Configure o arquivo .env com base no .env.exemplo.

-- Atualize as variáveis que estão no .env em seus arquivos.

    PORT -- /src/index.ts  (Essa variavel será a porta utilizada para abrir o servidor local para funcionamento da API)

    DB_FILE_PATH -- /src/database/baseDatabase.ts   (Essa variavel será o path para o seu arquivo Database criado anteriormente)

    JWT_KEY -- /src/services/tokenManager.ts    (Essa variavel será a sua senha segura, utilizada no momento de criação da criação do token)

    JWT_EXPIRES_IN -- /src/services/tokenManager.ts    (Essa variavel será o tempo até a expiração do token criado)

    BCRYPT_COST -- /src/services/HashManager.ts    (Essa variavel será a quantidade de ROUNDS utilizada no momento da encriptação do password do usuário)

-- Execute a API com o comando: npm run dev

-- Observe em seu terminal o endereço indicado.
```




