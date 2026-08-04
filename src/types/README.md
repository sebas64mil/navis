# src/types

## Purpose

Stores shared TypeScript contracts used across modules.

## What belongs here

- Domain model interfaces and type aliases.
- Cross-layer contracts reused by services, store, and features.

## What should not be placed here

- Executable runtime logic.
- Module-specific private types that are only used in one file.

## Relationship with the project

Type definitions enforce consistency between service responses, state structures, and component props.