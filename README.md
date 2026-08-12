# Navis - Reusable 3D Navigation Platform

Navis is a reusable web platform for interactive 3D navigation. The current workspace is configured for a campus-oriented experience, but the same structure can be reused for hospitals, museums, shopping centers, office complexes, and similar environments.

## Documentation Index

- [Project overview](README.md)
- [Static assets](public/README.md)
- [Core runtime](src/core/README.md)
- [Shared components](src/components/README.md)
- [UI primitives](src/components/ui/README.md)
- [Layout components](src/components/layout/README.md)
- [Graphics helpers](src/components/graphics/README.md)
- [Feature modules](src/features/README.md)
- [Services and data](src/services/README.md)
- [Global store](src/store/README.md)
- [3D layer](src/three/README.md)
- [Shared hooks](src/hooks/README.md)
- [Shared types](src/types/README.md)
- [Global styles](src/styles/README.md)
- [Utilities](src/utils/README.md)

## What This Project Solves

The codebase provides a shared foundation for indoor wayfinding experiences without rebuilding the navigation stack for every new site. It combines a 3D scene, category-aware location search, multilingual UI, and a modular architecture that keeps presentation, data, and state separated.

## Current State

The application currently includes:

- A 3D navigation shell built with React Three Fiber and Three.js.
- A floating search experience for locations and category filters.
- A sidebar with category filters, FAQ access, and app information.
- Popup overlays for FAQ content and application info.
- Centralized location data with categories: `facultad`, `administrativo`, and `servicios`.
- Search support for direct terms, tags, and category hashtags.
- Global state for search, selected location, theme, language, and panel visibility.
- Shared translation resources for Spanish and English.

## Recent Changes

The most recent updates focused on search, FAQ behavior, and layout stability:

- Expanded the location dataset with more sample locations across faculty, administration, and services.
- Added category-based filtering so search can be driven by hashtags like `#facultad`, `#administrativo`, and `#servicios`.
- Improved search matching so it works with location names, descriptions, and FAQ tags.
- Restored the floating search bar as a viewport-level element so it stays visible and does not collapse into the left navigation.
- Kept the FAQ and app-info dialogs as real popups rendered outside the sidebar tree.
- Added FAQ entries for common campus tasks such as tuition payment, admissions, certificates, and computer access.
- Updated the translation helper so it can return structured values like FAQ lists instead of only strings.

## Main Features

- Reusable 3D scene foundation based on React Three Fiber.
- Modular navigation experience split by feature domains.
- Category-aware search and filtering for campus locations.
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

## Key Runtime Flows

- The sidebar controls category filters and opens the popup overlays.
- The floating search panel queries location data and keeps results synchronized with the selected category.
- The search service normalizes text and can interpret category hashtags.
- The translation layer resolves language-specific UI strings and structured FAQ content.
- The main layout keeps the sidebar, search panel, and 3D viewport coordinated.

## Next Tasks

The next work items are intentionally visual and data-oriented:

- Polish the styles so the sidebar, floating search panel, and popups feel more intentional and consistent.
- Add test models to `public/models/` so the 3D scene can be validated with placeholder assets.
- Continue improving the sample location data so each category has enough coverage for realistic search and FAQ testing.

## Roadmap

- Environment packages: loadable presets for campuses, hospitals, museums, malls, and offices.
- Data integration adapters: CMS, GIS, and indoor mapping providers.
- Routing intelligence: indoor shortest-path and accessibility-aware paths.
- Role-based overlays: visitor, staff, emergency, and maintenance views.
- Expanded localization: translation pipelines and content fallback policies.
- Theming packs: configurable brand profiles per deployment.
- Telemetry and analytics: navigation flow metrics and UX optimization.
- Testing and quality gates: unit, integration, and visual validation.

## Documentation Scope

This README documents the current product shape and the implementation areas that matter most for the next iteration. The lower-level folder README files remain useful for component-specific or layer-specific details.
