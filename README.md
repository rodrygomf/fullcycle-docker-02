# Desafio 02 - NGINX com NodeJS
## fullcycle-docker-02
---
\
Nesse desafio a idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:
```
Full Cycle Rocks!

- Lista de nomes cadastrada no banco de dados.
```
---
## Para executar a aplicação com o docker-compose
```
docker-compose up -d
```
---
### URL para acesso
```
http://localhost:8080
```
.: Caso de erro 501/502 aguarde um pouco e acesse novamente