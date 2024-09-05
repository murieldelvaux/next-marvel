# Marvel Search Heros
Este é um projeto front-end que consome a [API da marvel]([https://nextjs.org/](https://developer.marvel.com/)) utilizando o framework [Next.js](https://nextjs.org/), baseado no React. O projeto foi desenvolvido pensando em uma experiência do usuário otimizada, através de boas prática de UX/UI, com foco na usabilidade, acessibilidade e responsividade. Além disso, foi utilizado o react-query para gestão de estados e uma arquitetura modularizada que facilita a manutenção e escalabilidade do código.

## Estrutura do projeto

```
├── app/
│   ├── (features)/
│   │   ├── (home)/
│   │   │   ├── components/
│   │   │   ├── hooks/ 
│   │   │   ├── react-queries/ 
│   │   │   ├── requests/
│   │   │   ├── types/ 
│   │   ├── (hero)/
│   │   │   ├── components/
│   │   │   ├── hooks/ 
│   │   │   ├── react-queries/ 
│   │   │   ├── requests/
│   │   │   ├── types/ 
│   │   │   └── [...heroId]/ 
│   ├── components/
│   ├── icons/ 
│   ├── stores/
│   ├── styles/
├── clients/ 
├── lib/
│   └── providers/│    
├── utils/
│   
├── tests/
│   ├── config/ 
│   ├── mocks/
│   ├── components/ 
│   ├── features/ 
```

# Funcionalidades Principais
- Listagem de heróis da Marvel utilizando a API pública.
- Paginação para navegação entre resultados.
- Ordenação alfabética de heróis de A-Z ou de Z-A.
- Seleção de até 5 heróis favoritos com persistência dos dados.
- Filtragem de heróis favoritos.
- Filtro de pesquisa pelo nome do herói.
- Visualização de detalhes de heróis e seus quadrinhos através de uma página com rota dinâmica.

## Tecnologias utilizadas e bibliotecas
- **Next.js**.
- **React**.
- **TypeScript**.
- **React Query**.
- **Zustand**.
- **Jest**.
- **React Testing Library**.
- **MSW**.
- **Faker**.

## Como iniciar

Primeiro, inicie o servidor de desenvolvimento:
```
bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página será atualizada automaticamente conforme você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente a fonte Inter, uma fonte personalizada do Google.

## Saiba mais

Para saber mais sobre o Next.js, confira os seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - conheça as funcionalidades e a API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) -  um tutorial interativo do Next.js.

Você pode verificar o [the Next.js GitHub repository](https://github.com/vercel/next.js/).

