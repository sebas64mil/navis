# public

## Purpose

Contains static assets served directly by the frontend runtime.

## Current Usage

The current Navis build treats this folder as the asset source for the campus experience, including:

- `environment/` for scene or deployment-specific files.
- `icons/` and `images/` for brand and UI visuals.
- `models/` and `textures/` for 3D placeholders and scene assets.
- `fonts/` for typography resources.

## What Belongs Here

- Static files that must be available at runtime without bundling.
- Test or placeholder models for the 3D scene.
- Images and icons used by the search, sidebar, and supporting screens.

## What Should Not Be Placed Here

- Application logic, React components, hooks, or services.
- Runtime-generated files.
- Build output artifacts.

## Relationship With the Project

The UI layer and 3D modules consume these assets through static paths. This folder is the right place for environment presets, visual references, and the test models that are planned next.