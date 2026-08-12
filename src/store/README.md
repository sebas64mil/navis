# src/store

## Purpose

Centralizes shared client state and state transition APIs.

## Current Usage

The current store tracks selected location, search text, active category, theme, language, and the visibility of the search/settings/FAQ/about panels.

## What Belongs Here

- Zustand stores and typed state contracts.
- Global state slices reused across routes and features.
- Deterministic state mutation actions.

## What Should Not Be Placed Here

- Server-side data fetching code.
- Route or view rendering logic.
- Ad hoc feature-local state that should remain in components.

## Relationship With the Project

The store provides a single source of truth for UI and feature coordination and is consumed by hooks and components.