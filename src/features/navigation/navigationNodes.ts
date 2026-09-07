import type { NavigationNode } from '../../types/navigation';

export const navigationNodes: NavigationNode[] = [
  { id: 1, name: 'Entrada principal', kind: 'entrada', tags: ['entrada'], floor: 1, connections: [2] },
  { id: 2, name: 'Conexion principal', kind: 'pasillo', tags: ['conexion'], floor: 1, connections: [1, 3, 10] },
  { id: 3, name: 'Escalera principal', kind: 'escalera', tags: ['escalera'], floor: 1, connections: [2, 4] },
  { id: 4, name: 'Conexion norte', kind: 'pasillo', tags: ['conexion'], floor: 1, connections: [3, 5] },
  { id: 5, name: 'Conexion central', kind: 'pasillo', tags: ['conexion'], floor: 1, connections: [4, 6, 9] },
  { id: 6, name: 'Corredor principal', kind: 'pasillo', tags: ['corredor'], floor: 1, connections: [5, 7, 8] },
  { id: 7, name: 'Decanatura de Ingenieria', kind: 'administracion', tags: ['decanatura'], floor: 1, connections: [6] },
  { id: 8, name: 'Facultad de Ingenieria', kind: 'administracion', tags: ['facultad'], floor: 1, connections: [6] },
  { id: 9, name: 'Corredor lateral', kind: 'pasillo', tags: ['corredor'], floor: 1, connections: [5, 11] },
  { id: 10, name: 'Escalera secundaria', kind: 'escalera', tags: ['escalera'], floor: 1, connections: [2, 11] },
  { id: 11, name: 'Pasillo de salones', kind: 'pasillo', tags: ['corredor'], floor: 1, connections: [10, 9, 12, 13, 14] },
  { id: 12, name: 'Salon 1', kind: 'salon', tags: ['salon'], floor: 1, connections: [11] },
  { id: 13, name: 'Salon 2', kind: 'salon', tags: ['salon'], floor: 1, connections: [11] },
  { id: 14, name: 'Salon 3', kind: 'salon', tags: ['salon'], floor: 1, connections: [11] },
];