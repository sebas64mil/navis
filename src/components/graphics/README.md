# src/components/graphics

## Purpose

Contains reusable visual helpers related to graphical presentation.

## Current Usage

This folder is reserved for shared visual wrappers and rendering helpers that support the UI and scene layers without owning scene logic.

## What Belongs Here

- Shared visual wrappers used by 2D/3D presentation layers.
- Non-domain rendering utilities that support UI scenes.

## What Should Not Be Placed Here

- Core Three.js scene orchestration, which belongs to `src/three/`.
- Domain-specific feature logic.

## Relationship With the Project

Acts as a bridge between reusable UI composition and rendering-oriented components.