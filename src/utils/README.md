# src/utils

## Purpose

Contains pure utility helpers shared across the codebase.

## What belongs here

- Deterministic helper functions.
- Formatting, parsing, and reusable calculation utilities.
- Small abstractions that do not depend on React runtime.

## What should not be placed here

- Feature orchestration, component rendering, or service I/O code.
- Global state ownership.

## Relationship with the project

Utilities are consumed by services, hooks, store, and features to reduce duplication while keeping logic testable and isolated.