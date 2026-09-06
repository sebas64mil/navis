import type { ReactNode } from 'react';

export type NavigationPosition = [number, number, number];
export type NavigationNodeKind = 'pasillo' | 'Recreacion' | 'salon' | 'corredor' | 'escalera' | 'administracion' | 'otro'|'Entrada';

export interface NavigationNode {
  id: number;
  kind: NavigationNodeKind;
  tags: string[];
  position: NavigationPosition;
  connections: number[];
}

export interface NavigationNodeProps {
  id: number;
  kind: NavigationNodeKind;
  tags?: string[];
  connections: number[];
  children: ReactNode;
  onRegister?: (node: NavigationNode) => void;
  isOnRoute?: boolean;
}

export interface NodeConnectionProps {
  start: NavigationPosition;
  end: NavigationPosition;
  isOnRoute?: boolean;
}