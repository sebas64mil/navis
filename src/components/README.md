# src/components

## Purpose

Hosts reusable presentation components used across features.

## What belongs here

- `ui/`: basic reusable controls.
- `layout/`: structural wrappers and navigation layout elements.
- `graphics/`: non-scene visual components and rendering helpers.

## What should not be placed here

- Business rules, data fetching logic, or store mutations.
- Feature-specific orchestration that cannot be reused.

## Relationship with the project

Components in this module are consumed by feature screens and core composition points to keep UI patterns consistent.