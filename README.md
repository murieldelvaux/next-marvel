# Marvel Search Heros
Este é um projeto front-end que consome a [API da marvel]([https://nextjs.org/](https://developer.marvel.com/)) utilizando o framework [Next.js](https://nextjs.org/), basedo no React. O projeto foi desenvolvido pensando em uma experiência do usuário otimizada, através de boas prática de UX/UI, com foco na usabilidade, acessibilidade e responsividade. Além disso, foi utilizado o react-query para gestão de estados e uma arquitetura modularizada que facilita a manutenção e escalabilidade do código.

## Estrutura do projeto

```
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
```

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

## Como iniciar

Primeiro, inicie o servidor de desenvolvimento:

bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página será atualizada automaticamente conforme você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente a fonte Inter, uma fonte personalizada do Google.

## Saiba mais

Para saber mais sobre o Next.js, confira os seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - conheça as funcionalidades e a API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) -  um tutorial interativo do Next.js.

Você pode verificar o [the Next.js GitHub repository](https://github.com/vercel/next.js/).

