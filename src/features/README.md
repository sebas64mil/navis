# src/features

## Purpose

Groups domain-driven user flows and screens by feature area.

## Current Usage

The navigation feature currently drives the location selection flow and relies on the shared search and popup infrastructure.

## What Belongs Here

- Navigation journeys and selectors.
- POI, routes, and search modules.
- Feature-specific components and orchestration.

## What Should Not Be Placed Here

- App bootstrap, routing root setup, or global providers.
- Generic reusable UI primitives.
- Shared cross-feature utility code.

## Relationship With the Project

Features consume core configuration, shared components, services, hooks, and store state to deliver user-facing capabilities.