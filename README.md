# TODO - List

Projeto para ajudar pessoas a organizar suas listas de coisas para fazer.

### Como configurar o ambiente (Linux)

```
git clone https://github.com/rafaelbenetti/todo-list

sudo docker build -t rafaelbenetti/todo-list .

mudar o volume do arquivo docker-compose.yml para o local que você fez download do código
    Ex: /home/rafaelbenetti/workspace/todo-list:/usr/src/app
    OBS: primeira parte é o caminho raiz da aplicação / segunda parte é o caminho dentro do container (deve manter o mesmo)

sudo docker-compose up
```

### Como acessar o ambiente

Acesse localhost na porta 3000.

```
Exemplo: http://localhost:3000
```

## Como executar os testes

Após subir o ambiente acessar o container que contém o nodeJS.

```
sudo docker exec -it todolist_api_1 bash

npm test
```

## Tecnologias utilizadas

Aqui está a lista com as tecnologias utilizadas:

### Environment

* [Docker](https://www.docker.com/)
* [NPM](https://www.npmjs.com/)
* [Bower](https://bower.io/)
* [Gulp](http://gulpjs.com/)

### Front-end

* [AngularJS](https://angularjs.org/)
* [Sass](http://sass-lang.com/)
* HTML
* CSS
* JS

### Back-end

* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Redis](https://redis.io/)

### Test

* [Supertest](https://github.com/visionmedia/supertest)
* [Mocha](https://mochajs.org/)

## Próximos passos

Como não foi possivel finalizar devido ao pouco tempo, seguem os próximos passos planejados:
* Adicionar controle de usuários usando PassportJS e Redis para controle de sessão.
* Criar modal customizada para apresentar mensagens.
* Criar push notifications para informar o usuário dos erros/sucessos.