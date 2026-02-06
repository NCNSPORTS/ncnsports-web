This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

# ncnsports-web
O Nada Com Nada Sports (NCNSPORTS) é uma plataforma que reúne informações de transmissões esportivas em um só lugar.

# NCNSPORTS — Design System 

Base visual do projeto **Nada Com Nada Sports**.  
Estilo dark broadcast / scoreboard.  
Foco: horário + LIVE visíveis em 1 segundo.

---

## 🎨 Cores

### Background
- BG: `#0B1220`
- Card: `#121A2B`
- Hover: `#17233A`
- Line: `#22304A`

### Texto
- Primary: `#EAF0FF`
- Muted: `#9BB0D1`

### Marca / Status
- Brand: `#3B82F6`
- LIVE: `#FF2D2D`
- Warn: `#F59E0B`

---

## ✍ Tipografia

### UI / Texto
**Inter**

css

font-family: 'Inter', system-ui, sans-serif;

📐 Tamanhos de Fonte
Uso	Size
Título página	32px
Seção	20px
Horário jogo	24px
Times	16px
Corpo	14px
Meta	12px
LIVE	12px bold

📏 Espaçamento (8px grid)
4px
8px
16px
24px
32px
40px

Cards:
Padding: 16px
Gap: 16–24px
Seções:
32–40px

# NCNSPORTS — Estrutura do Projeto (Styled Components + Routes)

Stack assumida:
- React + React Router
- styled-components
- Páginas principais: **Home > Esportes (NBA/NFL) > Jogo**

---

## Fluxo de páginas (rotas)

1) **Home**
- Lista/grade de ligas disponíveis (inicial: NBA, NFL)
- Atalhos: Hoje / Favoritos (se existir)

2) **Esporte (Liga)**
- Página “casa” da liga (NBA ou NFL)
- Tabs internas (opcional): Hoje | Calendário | Times | Favoritos
- Lista de jogos do dia (cards com LIVE, horário e onde assistir)

3) **Jogo**
- Detalhe do confronto
- “Onde assistir” no topo
- Status (Pré-jogo / LIVE / Final)

### Rotas sugeridas
- `/` → Home
- `/esportes` → redireciona para Home ou lista de ligas (opcional)
- `/esportes/:liga` → Liga (liga = `nba` | `nfl`)
- `/esportes/:liga/jogos/:gameId` → Página do jogo

Exemplo:
- `/esportes/nba`
- `/esportes/nba/jogos/12345`

---

## Hierarquia de pastas (recomendada)

Estrutura pensada para:
- separar **páginas**, **componentes reutilizáveis**, **estilos/tokens**, **serviços de dados** e **rotas**;
- facilitar escalabilidade sem virar bagunça.



## Convenções (pra manter o projeto “limpo”)

### Páginas
- Cada página tem:
  - `*.page.tsx` (estrutura/containers)
  - `*.styles.ts` (styled components da página)
  - `components/` interno (somente o que é exclusivo daquela página)

### Componentes reutilizáveis
- `components/ui` → primitivos (Button, Tabs, Chip, Badge)
- `components/domain` → peças do negócio (GameCard, LeagueCard, WhereToWatch)

### Styled-components
- `styles/theme` centraliza tokens.
- O app usa `ThemeProvider` no `Providers.tsx`.
- `GlobalStyle.ts` injeta fontes e estilos globais.

---

## Mapeamento de telas para arquivos

- Home `/`
  - `src/pages/Home/Home.page.tsx`
  - usa `LeagueCard`

- Liga `/esportes/:liga`
  - `src/pages/League/League.page.tsx`
  - usa `GameCard`

- Jogo `/esportes/:liga/jogos/:gameId`
  - `src/pages/Game/Game.page.tsx`
  - usa `WhereToWatch`, `GameHeader`

---

## Estados obrigatórios (padrão)

Aplicar em Home, League e Game:
- Loading → `Skeleton`
- Vazio → `EmptyState`
- Erro → `ErrorState`

---

## Observação de domínio (NBA/NFL inicial)

Definir enum/controlado:
- ligas permitidas: `nba`, `nfl`
- qualquer outra → NotFound ou Empty (decisão do produto)
