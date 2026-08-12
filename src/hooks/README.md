# src/hooks

## Purpose

Contains reusable custom React hooks for shared behavior.

## Current Usage

The main hook here is the translation helper, which now resolves both strings and structured FAQ content.

## What Belongs Here

- Cross-feature hooks for translation, interaction, or derived state.
- Hooks that wrap stable shared services or store selectors.

## What Should Not Be Placed Here

- Full feature workflows.
- Direct UI component definitions.

## Relationship With the Project

Hooks provide ergonomic access to shared capabilities and are consumed by components and features.