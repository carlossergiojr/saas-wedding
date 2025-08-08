# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` or `bun dev` (starts Docker services + Next.js with Turbopack)
- **Build**: `npm run build` or `bun build`
- **Production server**: `npm run start` or `bun start`
- **Lint**: `npm run lint` or `bun lint` (Next.js ESLint + Prettier integration)
- **Format**: `npm run format` or `bun format` (Prettier code formatting)
- **Type checking**: `npx tsc --noEmit` (TypeScript type checking without emitting files)

### Database Commands
- **Start database**: `npm run db:start` (starts Docker containers)
- **Stop database**: `npm run db:stop` (stops Docker containers)
- **Reset database**: `npm run db:reset` (removes volumes and restarts containers)
- **Generate Prisma client**: `npm run db:generate`
- **Push schema changes**: `npm run db:push` (for development)
- **Create migration**: `npm run db:migrate` (for production-ready migrations)
- **Open Prisma Studio**: `npm run db:studio` (database GUI at http://localhost:5555)
- **Seed database**: `npm run db:seed` (populate with sample data)

This project uses Bun as the package manager (bun.lock present).

## Architecture Overview

This is a Next.js 15 App Router project with TypeScript, styled with Tailwind CSS v4 and shadcn/ui components.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Database**: PostgreSQL 16 with Prisma ORM
- **Styling**: Tailwind CSS v4 + shadcn/ui component system
- **Fonts**: Geist Sans and Geist Mono via next/font/google
- **Component Library**: Radix UI primitives with custom styled components
- **Bundler**: Turbopack (development mode)
- **Containerization**: Docker Compose for local development

### Project Structure
- `src/app/` - App Router pages and layouts (layout.tsx, page.tsx, globals.css)
- `src/components/ui/` - shadcn/ui component library (Button, etc.)
- `src/lib/utils.ts` - Utility functions (cn() for className merging with clsx + tailwind-merge)
- `prisma/` - Database schema, migrations, and seed files
- `docker-compose.yml` - Local PostgreSQL database service
- Path aliases: `@/*` maps to `./src/*`

### Component System
The project uses shadcn/ui with the "new-york" style variant:
- Components use class-variance-authority for variant management
- Styling follows Tailwind CSS utility-first approach
- Icons from Lucide React
- Component composition via Radix UI's Slot pattern

### Code Quality
- ESLint with Next.js, TypeScript, and Prettier integration
- Prettier with Tailwind CSS plugin for class sorting
- TypeScript strict mode enabled
- CSS variables for theming support

### Database Setup
The project uses Prisma with PostgreSQL. Sample models include User and Wedding entities for the SaaS wedding platform. The database runs in Docker for local development.

**Environment Setup:**
1. Copy `.env.example` to `.env`
2. Run `npm run dev` to start both database and Next.js server
3. Run `npm run db:push` to sync schema with database
4. Run `npm run db:seed` to populate with sample data

### Key Files
- `components.json` - shadcn/ui configuration
- `eslint.config.mjs` - ESLint flat config with Prettier integration
- `next.config.ts` - Next.js configuration (minimal setup)
- `tsconfig.json` - TypeScript configuration with path aliases
- `prisma/schema.prisma` - Database schema definition
- `docker-compose.yml` - Local PostgreSQL database service
- `.env.example` - Environment variables template