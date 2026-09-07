import type { Place } from '../../types/navigation';

export const places: Place[] = [
  { id: 'entrada-principal', name: 'Entrada principal', floor: 1, nodeId: 1, tags: ['entrada', 'acceso'] },
  { id: 'decanatura-ingenieria', name: 'Decanatura de Ingenieria', floor: 1, nodeId: 7, tags: ['decanatura', 'administracion'] },
  { id: 'facultad-ingenieria', name: 'Facultad de Ingenieria', floor: 1, nodeId: 8, tags: ['facultad', 'ingenieria'] },
  { id: 'salon-1', name: 'Salon 1', floor: 1, nodeId: 12, tags: ['salon', 'clases'] },
  { id: 'salon-2', name: 'Salon 2', floor: 1, nodeId: 13, tags: ['salon', 'clases'] },
  { id: 'salon-3', name: 'Salon 3', floor: 1, nodeId: 14, tags: ['salon', 'clases'] },
];