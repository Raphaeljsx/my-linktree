# My Linktree

Aplicação para criar e personalizar um perfil no estilo [Linktree](https://linktr.ee): você configura nome, redes sociais e links em um painel lateral e vê a prévia em tempo real em um mockup de celular.

---

## Tecnologias utilizadas

- **React 19** – interface e componentes
- **TypeScript** – tipagem estática
- **Vite 7** – build e servidor de desenvolvimento
- **Tailwind CSS 4** – estilização (via `@tailwindcss/vite`)
- **Zustand** – gerenciamento de estado global
- **ESLint** – lint do código

---

## O que foi feito no projeto

### Funcionalidades

- **Configuração do perfil**
  - Nome, cargo e biografia
  - Usuário do GitHub com botão “Buscar”
  - Opções para exibir ou ocultar “seguidores” e “repositórios” na prévia

- **Redes sociais**
  - Campos para Instagram (IG), YouTube (YT), LinkedIn (IN) e X (Twitter)
  - Cada rede pode ser preenchida ou removida (botão ✕)
  - Prévia mostra “Sem redes cadastradas” quando nenhuma está preenchida

- **Links personalizados**
  - Adicionar vários links com **Label** (texto do botão) e **URL**
  - Remover links individualmente
  - URLs sem protocolo são normalizadas (ex.: `www.google.com.br` vira `https://www.google.com.br`) para abrir corretamente em nova aba

- **Prévia em tempo real**
  - Mockup de celular com avatar placeholder, nome, @usuário
  - Estatísticas (seguidores/repos) conforme as opções marcadas
  - Indicadores das redes e botões dos links personalizados

### Estrutura do código

- **Estado global** com Zustand em `src/store/useProfileStore.tsx` (perfil, redes, links e ações)
- **Componentes** em `src/components/`: `Sidebar` (formulário de edição), `Content` (prévia), `Input`, `InputWithLabel`, `Textarea`
- **Tipos** em `src/types/` para props de inputs e textarea
- **App** apenas monta layout (Sidebar + Content), sem estado local

---

## Como rodar o projeto localmente

### Pré-requisitos

- **Node.js** (recomendado LTS, ex.: 18 ou 20)  
  Verifique no terminal:
  ```bash
  node -v
  npm -v
  ```

### Passo a passo

1. **Clone o repositório** (ou acesse a pasta do projeto):
   ```bash
   git clone <url-do-repositorio>
   cd my-linktree
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Abra no navegador** a URL exibida no terminal (geralmente `http://localhost:5173`).

### Outros comandos

| Comando        | Descrição                          |
|----------------|------------------------------------|
| `npm run dev`  | Sobe o app em modo desenvolvimento |
| `npm run build`| Gera build de produção             |
| `npm run preview` | Serve o build localmente (preview) |
| `npm run lint` | Roda o ESLint                      |

---

## Estrutura de pastas (resumo)

```
my-linktree/
├── public/
├── src/
│   ├── components/    # Sidebar, Content, Input, InputWithLabel, Textarea
│   ├── store/         # useProfileStore (Zustand)
│   ├── types/         # Tipos (Input, Textarea, etc.)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig*.json
```

---

## Licença

Projeto de uso livre para estudo e portfólio.
