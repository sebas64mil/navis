# src/components/layout

## Purpose

Provides the application structure that arranges screens, navigation regions, and popups.

## Current Usage

This folder contains the current left navigation shell, the floating search panel, and the page composition used by the 3D scene.

## What Belongs Here

- Main page shells and containers.
- Sidebars, drawers, and structural panels.
- Layout components shared by multiple routes or viewport states.

## What Should Not Be Placed Here

- Low-level UI primitives that belong to `ui/`.
- Feature-specific business behavior.

## Relationship With the Project

Layout components assemble core and feature modules into the visible page structure. They are also the right place for viewport-level positioning rules such as the floating search panel and portal-based popups.