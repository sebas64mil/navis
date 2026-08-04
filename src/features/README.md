# src/features

## Purpose

Groups domain-driven user flows and screens by feature area.

## What belongs here

- Navigation journeys and selectors.
- POI, routes, and search modules.
- Feature-specific components and orchestration.

## What should not be placed here

- App bootstrap, routing root setup, or global providers.
- Generic reusable UI primitives.
- Shared cross-feature utility code.

## Relationship with the project

Features consume core configuration, shared components, services, hooks, and store state to deliver user-facing capabilities.