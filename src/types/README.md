# src/types

## Purpose

Stores shared TypeScript contracts used across modules.

## Current Usage

The current type layer defines the campus location model and its category union, which are reused by services, store state, and UI props.

## What Belongs Here

- Domain model interfaces and type aliases.
- Cross-layer contracts reused by services, store, and features.

## What Should Not Be Placed Here

- Executable runtime logic.
- Module-specific private types that are only used in one file.

## Relationship With the Project

Type definitions enforce consistency between service responses, state structures, and component props.