# Navis - Reusable 3D Navigation Platform

Navis is a reusable web platform for interactive 3D navigation across multiple environment types, including campuses, hospitals, museums, shopping centers, and office complexes.

## Purpose

The project provides a common foundation to build guided 3D wayfinding experiences without rewriting core infrastructure for each new client or location.

The platform is designed to be:

- Environment-agnostic: same engine, different spatial contexts.
- Multilingual: UI and domain content can be localized.
- Design-system driven: visual style, tokens, and components are configurable.

## Main Features

- Reusable 3D scene foundation based on React Three Fiber.
- Modular navigation experience split by feature domains.
- Multilanguage support through centralized translation resources.
- Global application state for navigation, theme, and language.
- Configurable UI layer with reusable components and layout primitives.
- Static asset buckets for environment, textures, models, images, and icons.

## Technologies Used

- React 19
- TypeScript 6
- Vite 8
- React Router 7
- Zustand 5
- Three.js + React Three Fiber + Drei
- Oxlint

## Project Architecture

The codebase follows a modular, layered architecture:

- `public/`: static assets and environment resources.
- `src/core/`: app bootstrap, providers, routing, and global setup.
- `src/components/`: reusable UI, layout, and graphics components.
- `src/features/`: domain-focused user flows and screens.
- `src/three/`: 3D engine structure (camera, lights, scenes, systems).
- `src/services/`: data access and integration boundaries.
- `src/store/`: global state management.
- `src/styles/`: global styles and design tokens.
- `src/types/`: shared domain and contract types.
- `src/hooks/` and `src/utils/`: reusable hooks and helper functions.

Each major folder includes its own README with usage boundaries and responsibilities.

## Future Roadmap

- Environment packages: loadable presets for campuses, hospitals, museums, malls, and offices.
- Data integration adapters: CMS, GIS, and indoor mapping providers.
- Routing intelligence: indoor shortest-path and accessibility-aware paths.
- Role-based overlays: visitor, staff, emergency, and maintenance views.
- Expanded localization: translation pipelines and content fallback policies.
- Theming packs: configurable brand profiles per deployment.
- Telemetry and analytics: navigation flow metrics and UX optimization.
- Testing and quality gates: unit, integration, and visual validation.

## Documentation Scope

This stage focuses on architecture and organization documentation only. Functional implementation details are intentionally separated from this documentation phase.
