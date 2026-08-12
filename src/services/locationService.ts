import type { Location } from '../types/location';

const CATEGORY_ALIASES: Record<string, Location['category']> = {
  facultad: 'facultad',
  facultades: 'facultad',
  administracion: 'administrativo',
  administrativo: 'administrativo',
  administra: 'administrativo',
  servicios: 'servicios',
};

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function resolveCategoryFromHash(tag: string): Location['category'] | null {
  return CATEGORY_ALIASES[normalizeText(tag)] ?? null;
}

const MOCK_LOCATIONS: Location[] = [
  // Facultades
  {
    id: 'facultad-ingenieria',
    name: 'Facultad de Ingeniería',
    description: 'Edificio principal de los programas de Ingeniería, laboratorios de sistemas y electrónica.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80',
    category: 'facultad',
    faqTags: ['ingenieria', 'sistemas', 'laboratorios', 'clases'],
  },
  {
    id: 'facultad-arquitectura',
    name: 'Facultad de Arquitectura',
    description: 'Talleres de diseño, salas de maquetas y aulas de teoría arquitectónica.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
    category: 'facultad',
    faqTags: ['arquitectura', 'diseño', 'maquetas'],
  },
  {
    id: 'facultad-derecho',
    name: 'Facultad de Derecho',
    description: 'Aulas de teoría jurídica, semilleros de investigación y consultorio legal.',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=400&q=80',
    category: 'facultad',
    faqTags: ['derecho', 'juridica', 'abogados', 'consultorio'],
  },
  {
    id: 'facultad-ciencias',
    name: 'Facultad de Ciencias Básicas',
    description: 'Laboratorios de química, física y biología, auditorios principales.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80',
    category: 'facultad',
    faqTags: ['ciencias', 'quimica', 'fisica', 'biologia'],
  },
  {
    id: 'facultad-comunicacion',
    name: 'Facultad de Comunicación',
    description: 'Cabinas de radio, salas de edición y aulas para producción audiovisual.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
    category: 'facultad',
    faqTags: ['comunicacion', 'radio', 'edicion', 'audiovisual'],
  },
  
  // Administrativo
  {
    id: 'edificio-administrativo',
    name: 'Edificio Administrativo',
    description: 'Rectoría, vicerrectoría y oficinas de atención al estudiante.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    category: 'administrativo',
    faqTags: ['rectoria', 'atencion', 'oficinas'],
  },
  {
    id: 'admisiones',
    name: 'Admisiones',
    description: 'Punto de información para inscripciones, requisitos de ingreso y novedades de matrícula.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80',
    category: 'administrativo',
    faqTags: ['admisiones', 'inscripcion', 'matricula', 'ingreso'],
  },
  {
    id: 'registro-control',
    name: 'Registro y Control',
    description: 'Oficina encargada de admisiones, matrículas y certificados académicos.',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&w=400&q=80',
    category: 'administrativo',
    faqTags: ['matricula', 'certificados', 'admisiones', 'pagos', 'recibo'],
  },
  {
    id: 'tesoreria',
    name: 'Tesorería y Pagos',
    description: 'Cajas para pago de matrículas, derechos de grado y otros servicios.',
    image: 'https://images.unsplash.com/photo-1554774853-a50f75855f83?auto=format&fit=crop&w=400&q=80',
    category: 'administrativo',
    faqTags: ['pagar', 'matricula', 'caja', 'tesoreria', 'banco'],
  },
  {
    id: 'secretaria-general',
    name: 'Secretaría General',
    description: 'Trámites institucionales, certificados, actas y documentación oficial.',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=400&q=80',
    category: 'administrativo',
    faqTags: ['secretaria', 'documentos', 'actas', 'certificados'],
  },

  // Servicios
  {
    id: 'biblioteca-central',
    name: 'Biblioteca Central',
    description: 'Salas de estudio, préstamo de libros y bases de datos digitales.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&q=80',
    category: 'servicios',
    faqTags: ['biblioteca', 'libros', 'estudio'],
  },
  {
    id: 'sala-sistemas',
    name: 'Sala de Sistemas',
    description: 'Equipos de cómputo, acceso a software académico e impresión.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
    category: 'servicios',
    faqTags: ['computadores', 'impresion', 'software', 'sistemas'],
  },
  {
    id: 'cafeteria-central',
    name: 'Cafetería Central',
    description: 'Zona de alimentación principal, cafetería y microondas.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80',
    category: 'servicios',
    faqTags: ['comida', 'almuerzo', 'cafeteria', 'microondas'],
  },
  {
    id: 'deportes-bienestar',
    name: 'Complejo Deportivo',
    description: 'Canchas, gimnasio y espacios para actividad física y recreación.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
    category: 'servicios',
    faqTags: ['deportes', 'gimnasio', 'canchas', 'recreacion'],
  },
  {
    id: 'bienestar-universitario',
    name: 'Bienestar Universitario',
    description: 'Centro médico, psicología, deportes y actividades culturales.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5adee9f50?auto=format&fit=crop&w=400&q=80',
    category: 'servicios',
    faqTags: ['medico', 'deportes', 'psicologia', 'salud', 'cultura'],
  },
];

export async function getLocations(): Promise<Location[]> {
  return MOCK_LOCATIONS;
}

export async function getLocationById(id: string): Promise<Location | undefined> {
  return MOCK_LOCATIONS.find((loc) => loc.id === id);
}

export async function searchLocations(query: string): Promise<Location[]> {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return MOCK_LOCATIONS;

  let categoryFilter: Location['category'] | null = null;
  let textSearch = normalizedQuery;

  const hashMatch = query.match(/#([\p{L}]+[\p{L}\p{N}_-]*)/u);
  if (hashMatch) {
    categoryFilter = resolveCategoryFromHash(hashMatch[1]);
    textSearch = normalizeText(query.replace(hashMatch[0], ''));
  }

  return MOCK_LOCATIONS.filter((loc) => {
    if (categoryFilter && loc.category !== categoryFilter) return false;
    
    if (!textSearch) return true;
    
    const searchableFields = [
      loc.name,
      loc.description,
      loc.category,
      ...(loc.faqTags ?? []),
    ].map(normalizeText);

    return (
      searchableFields.some((field) => field.includes(textSearch))
    );
  });
}
