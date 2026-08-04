# src/store

## Purpose

Centralizes shared client state and state transition APIs.

## What belongs here

- Zustand stores and typed state contracts.
- Global state slices reused across routes and features.
- Deterministic state mutation actions.

## What should not be placed here

- Server-side data fetching code.
- Route/view rendering logic.
- Ad hoc feature-local state that should remain in components.

## Relationship with the project

The store provides a single source of truth for UI/feature coordination and is consumed by hooks and components.