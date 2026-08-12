# src/three

## Purpose

Defines the 3D runtime architecture and scene composition building blocks.

## Current Usage

The scene layer currently hosts the main campus viewport and is the target for the upcoming test models that will validate the experience.

## What Belongs Here

- Cameras, controls, lights, materials, and model loaders.
- Scene definitions and environment setup.
- 3D systems and helpers used by interactive spaces.

## What Should Not Be Placed Here

- Non-3D business workflows.
- Routing setup and global app bootstrap.
- General-purpose UI controls.

## Relationship With the Project

This module powers the spatial layer consumed by feature screens, coordinated with global state and configuration from core/store.