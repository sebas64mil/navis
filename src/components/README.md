# src/components

## Purpose

Hosts reusable presentation components used across the application.

## Current Usage

This layer now covers the main navigation shell, the floating search experience, and the popups that support the current campus workflow.

## What Belongs Here

- `ui/`: basic reusable controls such as the search input and buttons.
- `layout/`: structural wrappers, sidebar navigation, and page composition.
- `graphics/`: non-scene visual helpers and rendering support components.

## What Should Not Be Placed Here

- Business rules, data fetching logic, or store mutations.
- Feature-specific orchestration that cannot be reused.

## Relationship With the Project

Components in this module are consumed by feature screens and core composition points to keep interaction patterns and layout behavior consistent.