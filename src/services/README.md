# src/services

## Purpose

Implements data access and integration boundaries.

## Current Usage

The main service here is the location provider, which currently serves mock campus data and powers category-aware search.

## What Belongs Here

- API clients and repository adapters.
- Mock or stub providers used during early phases.
- Data transformation at I/O boundaries.

## What Should Not Be Placed Here

- JSX rendering logic.
- Global app configuration.
- Direct store or UI side effects.

## Relationship With the Project

Services are consumed by features and hooks to keep data acquisition separate from presentation and state orchestration.