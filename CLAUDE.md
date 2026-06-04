# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (binds to intranet.sigep.local:3000)
npm run dev

# Build
npm run build

# Lint
npm run lint
npm run lint:fix
```

There is no test suite configured.

## Environment Variables

Copy `.env.example` to `.env.local` for local setup. The active `.env` uses internal hostnames:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_BACKEND_URL` | Laravel Sanctum backend (e.g. `http://core.sigep.local`) |
| `EMPLOYEES_URL` | RRHH service for employees/birthdays/posts |
| `SIGEPA_URL` | Auditorias service |
| `PATRIMONIO_URL` | Patrimonio service |
| `OLLAMA_BASE_URL` | Ollama LLM server URL |
| `OLLAMA_MODEL` | Ollama model name (default: `qwen`) |
| `OLLAMA_SYSTEM_PROMPT` | System prompt for the Control AI assistant |

## Architecture

This is a **Next.js 14 intranet app** (App Router) built on top of Laravel Breeze Next scaffolding. Authentication is handled via Laravel Sanctum (cookie-based CSRF + session).

### Route Groups

- `src/app/(auth)/` — Public auth pages: login, register, forgot/reset password, verify-email
- `src/app/(app)/` — Protected pages: dashboard, control, profile, institutional
- `src/app/api/` — Next.js API routes that proxy requests to backend services

### Authentication Flow

`src/hooks/auth.js` exports `useAuth()`, the central hook for all auth operations. It uses SWR to fetch `/api/v1/user` from the Laravel backend. The `(app)/layout.js` wraps all protected pages and redirects unauthenticated users via `useAuth({ middleware: 'auth' })`.

`src/lib/axios.js` configures the Axios instance with `withCredentials: true` and XSRF token handling — all API calls to the Laravel backend must go through this instance.

### API Routes (Next.js)

The Next.js API routes act as proxies/adapters to internal backend services:

- `POST /api/control/research` — Sends a prompt to Ollama and returns an AI-generated answer
- `GET /api/employees` — Proxies to `EMPLOYEES_URL/api/v1/employees/birthdays`
- `GET /api/news` — Proxies to `EMPLOYEES_URL/api/v1/posts`
- `GET /api/holidays` — Holidays data
- `/api/control/plans/*` — Audit plans CRUD
- `/api/users/*` — User management

### Module Structure

`src/components/modules/` contains feature-scoped components:

- `Dashboard/` — Apps grid, News feed, Web links, DashboardDatePicker
- `Control/` — Audit Plans, Audits list, AI Research chat, History
- `Employees/` — Birthdays, ProfileData
- `Profile/` — Header, Info, Sidebar, Conversations

### UI Components

`src/components/ui/` contains shadcn/ui primitives (card, button, input, dialog, drawer, chart, badge, separator). Custom shared components (Button, Card, Dropdown, Input, etc.) live directly in `src/components/`.

### Styling

Tailwind CSS with a custom color palette defined in `tailwind.config.js`:
- `primary`: `#7c2c47`
- `secondary`: `#521D2F`
- `pink`: `#B84169`

### Path Aliases

`@/*` maps to `src/*` (configured in `jsconfig.json`).

### PWA

The app is a PWA — `src/app/manifest.js` and `src/components/PWARegister.js` handle service worker registration and offline support (`src/app/offline/page.js`).

### Context

- `src/context/YearContext.js` — Provides a `year` value to the Control module subtree via `YearProvider` / `useYear()`
- `src/context/AuthContext.js` — Unused/stub; actual auth state comes from `src/hooks/auth.js`
