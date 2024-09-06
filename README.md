
# Desafio Técnico - Desenvolvedor Frontend

Este projeto foi desenvolvido com utilizando as tecnologias mais atuais. O intuito do sistema é realizar a listagem de filmes e séries usando a api THEMOVIEDB, na qual é possivel visualizar as imagens principais de posters e visualizar detalhes do filme.

## 📔 Linguagens e libs utilizadas 

- [![Vuejs](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)

- [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vitess)](https://vitejs.dev/)

- [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios)](https://axios-http.com/ptbr/docs/intro)

- [![Javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=%23000000)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

- [![tailwindcss](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=%23000000)](https://tailwindui.com/)

- [![TMDB](https://img.shields.io/badge/themoviedatabase-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=%23000000)](https://www.themoviedb.org/)

- [![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge)](https://www.docker.com/)

## ⚙️ Funcionalidades 

- Home - Listagem de Filmes e Séries
- Filmes - Listagem de Filmes
- Series - Listagem de Séries
- Página Detalhes - Detalhes de Filmes/Series

## ♟️ Variáveis de Ambiente 
Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`VITE_API_KEY=SUA_CHAVE_DE_ACESSO_A_API`

`VITE_BASE_URL=https://api.themoviedb.org/3`

`VITE_YOUTUBE_URL=https://www.youtube.com`

## ♟️ Executando localmente com Docker

Clone o projeto

Frontend:

```bash
  git clone https://github.com/MaikonLima/movieflix
```

Entre no diretório do projeto

```bash
  cd movieflix
```

Instale as dependências

```bash
  yarn install
```

## ♟️ Construir a imagem Docker
No terminal, navegue até o diretório do projeto e execute o comando para construir a imagem:

```bash
  docker build -t movieflix .
```

Executar o container
```bash
  docker run -p 3000:3000 movieflix
```

## ♟️ Acessar o projeto
Após rodar o container, o projeto estará disponível em http://localhost:3000.

## Autores

- [@maikonLima](https://www.github.com/maikonLima)






