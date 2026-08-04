# src/services

## Purpose

Implements data access and integration boundaries.

## What belongs here

- API clients and repository adapters.
- Mock/stub providers used during early phases.
- Data transformation at I/O boundaries.

## What should not be placed here

- JSX rendering logic.
- Global app configuration.
- Direct store/UI side effects.

## Relationship with the project

Services are consumed by features and hooks to keep data acquisition separate from presentation and state orchestration.