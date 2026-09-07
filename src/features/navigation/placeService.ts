import { places } from './places';
import type { Place } from '../../types/navigation';

const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

export function searchPlaces(query: string): Place[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return places;

  return places.filter((place) => [place.name, place.id, ...(place.tags ?? [])]
    .map(normalize)
    .some((field) => field.includes(normalizedQuery)));
}

export function getPlaceById(id: string): Place | undefined {
  return places.find((place) => place.id === id);
}