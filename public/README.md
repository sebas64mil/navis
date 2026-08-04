# public

## Purpose

Stores static assets served directly by the frontend runtime.

## What belongs here

- Environment assets and map resources in `environment/`.
- Brand and UI visual assets in `icons/` and `images/`.
- Reusable 3D asset files in `models/` and `textures/`.
- Fonts and typography resources in `fonts/`.
- Global static files such as `favicon.svg`.

## What should not be placed here

- Application logic, React components, hooks, or services.
- Runtime-generated files.
- Build output artifacts.

## Relationship with the project

Files in this folder are consumed by the UI layer and 3D modules through static paths. It is the asset source for environment-specific deployments.