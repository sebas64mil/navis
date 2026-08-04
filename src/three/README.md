# src/three

## Purpose

Defines the 3D runtime architecture and scene composition building blocks.

## What belongs here

- Cameras, controls, lights, materials, and model loaders.
- Scene definitions and environment setup.
- 3D systems and helpers used by interactive spaces.

## What should not be placed here

- Non-3D business workflows.
- Routing setup and global app bootstrap.
- General-purpose UI controls.

## Relationship with the project

This module powers the spatial layer consumed by feature screens, coordinated with global state and configuration from core/store.