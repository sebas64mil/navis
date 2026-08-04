export type SupportedLanguage = 'en' | 'es';

export interface TranslationSchema {
  app: {
    title: string;
    subtitle: string;
    selectLocationPrompt: string;
  };
  navigation: {
    backToLocations: string;
    locationsList: string;
    searchPlaceholder: string;
    noResults: string;
    collapseSidebar: string;
    expandSidebar: string;
  };
  location: {
    select: string;
    selected: string;
    category: string;
  };
  theme: {
    toggleLight: string;
    toggleDark: string;
  };
  language: {
    selectLanguage: string;
  };
}

export const translations: Record<SupportedLanguage, TranslationSchema> = {
  en: {
    app: {
      title: '3D Navigation Platform',
      subtitle: 'Select a location to launch interactive 3D view',
      selectLocationPrompt: 'Choose a location from below to enter the 3D space',
    },
    navigation: {
      backToLocations: 'Back to Locations',
      locationsList: 'Available Locations',
      searchPlaceholder: 'Search locations...',
      noResults: 'No locations found',
      collapseSidebar: 'Collapse Sidebar',
      expandSidebar: 'Expand Sidebar',
    },
    location: {
      select: 'Enter Location',
      selected: 'Current Location',
      category: 'Category',
    },
    theme: {
      toggleLight: 'Light Mode',
      toggleDark: 'Dark Mode',
    },
    language: {
      selectLanguage: 'Language',
    },
  },
  es: {
    app: {
      title: 'Plataforma de Navegación 3D',
      subtitle: 'Seleccione una ubicación para iniciar la vista 3D interactiva',
      selectLocationPrompt: 'Elija una ubicación a continuación para ingresar al espacio 3D',
    },
    navigation: {
      backToLocations: 'Volver a Ubicaciones',
      locationsList: 'Ubicaciones Disponibles',
      searchPlaceholder: 'Buscar ubicaciones...',
      noResults: 'No se encontraron ubicaciones',
      collapseSidebar: 'Contraer barra lateral',
      expandSidebar: 'Expandir barra lateral',
    },
    location: {
      select: 'Ingresar a Ubicación',
      selected: 'Ubicación Actual',
      category: 'Categoría',
    },
    theme: {
      toggleLight: 'Modo Claro',
      toggleDark: 'Modo Oscuro',
    },
    language: {
      selectLanguage: 'Idioma',
    },
  },
};
