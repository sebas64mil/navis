# src/utils

## Purpose

Contains pure utility helpers shared across the codebase.

## Current Usage

This folder is available for deterministic helpers that can support search normalization, formatting, or test data preparation as the project grows.

## What Belongs Here

- Deterministic helper functions.
- Formatting, parsing, and reusable calculation utilities.
- Small abstractions that do not depend on the React runtime.

## What Should Not Be Placed Here

- Feature orchestration, component rendering, or service I/O code.
- Global state ownership.

## Relationship With the Project

Utilities are consumed by services, hooks, store, and features to reduce duplication while keeping logic testable and isolated.