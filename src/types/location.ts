export type LocationCategory = 'facultad' | 'administrativo' | 'servicios';

export interface Location {
  id: string;
  name: string;
  description: string;
  image: string;
  category: LocationCategory;
  faqTags?: string[];
}
