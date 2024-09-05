# Marvel Search Heros
Este é um projeto front-end que consome a [API da marvel]([https://nextjs.org/](https://developer.marvel.com/)) utilizando o framework [Next.js](https://nextjs.org/), basedo no React. O projeto foi desenvolvido pensando em uma experiência do usuário otimizada, através de boas prática de UX/UI, com foco na usabilidade, acessibilidade e responsividade. Além disso, foi utilizado o react-query para gestão de estados e uma arquitetura modularizada que facilita a manutenção e escalabilidade do código.

## Estrutura 

├── app/
│   ├── (features)/
│   │   ├── (home)/
│   │   │   ├── components/ (componentes específicos da feature home)
│   │   │   ├── hooks/ (custom hooks para lógica de renderização da feature)
│   │   │   ├── react-queries/ (hooks de integração com React Query)
│   │   │   ├── requests/ (chamadas de API)
│   │   │   ├── types/ (tipagens para as requisições)
│   │   │   └── page.tsx (componente da página)
│   │   ├── (hero)/
│   │   │   ├── components/ (componentes específicos da feature hero)
│   │   │   ├── hooks/ (custom hooks para lógica de renderização da feature)
│   │   │   ├── react-queries/ (hooks de integração com React Query para heróis)
│   │   │   ├── requests/ (requisições de API)
│   │   │   ├── types/ (tipagens para requisições de heróis)
│   │   │   └── [...heroId]/ (página dinâmica para herói específico)
│   ├── components/ (componentes compartilhados entre features)
│   ├── icons/ (ícones usados na aplicação)
│   ├── stores/ (gerenciamento de estado global com Zustand)
│   ├── styles/ (módulos CSS para estilização das páginas)
├── clients/
│   └── marvelServiceFetch.ts (configuração de função centralizada para fazer requisições à API e tratar erros de forma padronizada)
├── lib/
│   └── providers/
│       ├── react-query/ (configuração do React Query)
│       └── QueryClientProvider.tsx (configuração do client do React Query)
├── utils/ (funções utilitárias)
│   
├── tests/
│   ├── config/ (configuração do React Testing Library)
│   ├── mocks/ (respostas simuladas da API)
│   ├── components/ (testes de componentes comuns)
│   ├── features/ (testes específicos de features, seguindo a mesma estrutura da pasta app > (features))
│   └── TestQueryWrapper.tsx (wrapper de testes com o provider do React Query)

# Funcionalidades Principais
- Listagem de heróis da Marvel utilizando a API pública.
- Paginação para navegação entre resultados.
- Ordenação alfabética de heróis de A-Z ou de Z-A.
- Seleção de até 5 heróis favoritos.
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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
