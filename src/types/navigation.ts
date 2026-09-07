import type { ReactNode } from 'react';

export type NavigationPosition = [number, number, number];
export type NavigationNodeKind = 'entrada' | 'pasillo' | 'puente' | 'salon' | 'corredor' | 'escalera' | 'administracion' | 'otro';

export interface NavigationNode {
  id: number;
  name: string;
  kind: NavigationNodeKind;
  tags: string[];
  floor: number;
  connections: number[];
}

export interface NavigationNodeProps {
  nodeId: number;
  position: NavigationPosition;
  children: ReactNode;
  isOnRoute?: boolean;
}

export interface Place {
  id: string;
  name: string;
  floor: number;
  nodeId: number;
  tags?: string[];
}

export interface NodeConnectionProps {
  start: NavigationPosition;
  end: NavigationPosition;
  isOnRoute?: boolean;
}