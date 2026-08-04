# src/core

## Purpose

Contains application bootstrap and cross-cutting runtime configuration.

## What belongs here

- Entry point and app initialization (`main.tsx`, `App.tsx`).
- Dependency and context providers (`providers.tsx`).
- Router setup (`router.tsx`).
- Global i18n and theme configuration (`i18n.ts`, `theme.ts`).

## What should not be placed here

- Feature-specific screens or business workflows.
- 3D scene implementation details.
- Generic reusable UI components.

## Relationship with the project

This layer wires together the entire app and exposes shared configuration used by features, services, store, and UI components.