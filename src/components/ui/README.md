# src/components/ui

## Purpose

Defines reusable, style-system-aligned UI primitives.

## Current Usage

The main primitives here are the search input and button components used by the layout and feature modules.

## What Belongs Here

- Stateless controls such as buttons and inputs.
- Accessible interaction primitives used across multiple features.
- Components aligned with design tokens.

## What Should Not Be Placed Here

- Screen-specific composition or feature-level state handling.
- Data fetching and domain logic.

## Relationship With the Project

This folder supports consistent interaction patterns and is imported by layout and feature components. It should stay presentation-only.