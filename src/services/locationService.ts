import type { Location } from '../types/location';

const MOCK_LOCATIONS: Location[] = [
  {
    id: 'campus-building-a',
    name: 'Main Academic Building',
    description: 'Central campus complex featuring administrative offices, lecture halls, and main auditorium.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80',
    category: 'Education',
  },
  {
    id: 'innovation-hub',
    name: 'Technology & Innovation Center',
    description: 'Modern research facility equipped with advanced 3D laboratories and tech incubators.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
    category: 'Research',
  },
  {
    id: 'central-library',
    name: 'Grand Memorial Library',
    description: 'Multi-level library offering quiet study zones, digital archives, and collaborative workspaces.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&q=80',
    category: 'Facilities',
  },
  {
    id: 'science-park',
    name: 'Bio-Tech Science Complex',
    description: 'State-of-the-art biological and chemical laboratory facility with outdoor botanical square.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    category: 'Science',
  },
];

export async function getLocations(): Promise<Location[]> {
  return MOCK_LOCATIONS;
}

export async function getLocationById(id: string): Promise<Location | undefined> {
  return MOCK_LOCATIONS.find((loc) => loc.id === id);
}

export async function searchLocations(query: string): Promise<Location[]> {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return MOCK_LOCATIONS;
  return MOCK_LOCATIONS.filter(
    (loc) =>
      loc.name.toLowerCase().includes(normalized) ||
      loc.description.toLowerCase().includes(normalized) ||
      loc.category.toLowerCase().includes(normalized)
  );
}
