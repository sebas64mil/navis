# src/core

## Purpose

Contains application bootstrap and cross-cutting runtime configuration.

## Current Usage

This layer wires the app together, including the provider tree, the current layout, translation resources, and the shared theme/runtime setup.

## What Belongs Here

- Entry point and app initialization (`main.tsx`, `App.tsx`).
- Dependency and context providers (`providers.tsx`).
- Router setup (`router.tsx`).
- Global i18n and theme configuration (`i18n.ts`, `theme.ts`).

## What Should Not Be Placed Here

- Feature-specific screens or business workflows.
- 3D scene implementation details.
- Generic reusable UI components.

## Relationship With the Project

This layer wires together the entire app and exposes shared configuration used by features, services, store, and UI components.