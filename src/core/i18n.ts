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
    clearFilter: string;
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
  settings: {
    theme: string;
    language: string;
  };
  sidebar: {
    settings: string;
    faq: string;
    about: string;
  };
  categories: {
    facultad: string;
    administrativo: string;
    servicios: string;
  };
  faq: {
    title: string;
    subtitle: string;
    questions: { label: string; places: { id: string; name: string }[] }[];
  };
  about: {
    title: string;
    body: string;
  };
  map: {
    zoomIn: string;
    zoomOut: string;
    myLocation: string;
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
      clearFilter: 'Clear filter',
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
    settings: {
      theme: 'Theme',
      language: 'Language',
    },
    sidebar: {
      settings: 'Settings',
      faq: 'Frequently Asked Questions',
      about: 'About',
    },
    categories: {
      facultad: 'Faculties',
      administrativo: 'Administration',
      servicios: 'Services',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'How can we help you?',
      questions: [
        { label: 'Where do I pay my tuition?', places: [{ id: 'tesoreria', name: 'Treasury & Payments' }] },
        { label: 'Where do I get my academic certificate?', places: [{ id: 'registro-control', name: 'Registry & Control' }] },
        { label: 'Where is the medical center?', places: [{ id: 'bienestar-universitario', name: 'University Welfare' }] },
        { label: 'Where are the engineering labs?', places: [{ id: 'facultad-ingenieria', name: 'Faculty of Engineering' }] },
        { label: 'Where do I enroll as a new student?', places: [{ id: 'admisiones', name: 'Admissions' }] },
        { label: 'Where can I print or use a computer?', places: [{ id: 'sala-sistemas', name: 'Computer Lab' }] },
      ],
    },
    about: {
      title: 'About the App',
      body: 'Navis 3D is an interactive navigation platform designed to help students and visitors explore the campus in a rich 3D environment.\n\nUse the sidebar to filter locations by category, search for specific places, and get answers to frequently asked questions.',
    },
    map: {
      zoomIn: 'Zoom in',
      zoomOut: 'Zoom out',
      myLocation: 'Reset view',
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
      clearFilter: 'Quitar filtro',
    },
    location: {
      select: 'Ir a la Ubicación',
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
    settings: {
      theme: 'Tema',
      language: 'Idioma',
    },
    sidebar: {
      settings: 'Configuración',
      faq: 'Preguntas Frecuentes',
      about: 'Acerca de',
    },
    categories: {
      facultad: 'Facultades',
      administrativo: 'Administración',
      servicios: 'Servicios',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: '¿En qué te podemos ayudar?',
      questions: [
        { label: '¿Dónde se paga la matrícula?', places: [{ id: 'tesoreria', name: 'Tesorería y Pagos' }] },
        { label: '¿Dónde saco un certificado de notas?', places: [{ id: 'registro-control', name: 'Registro y Control' }] },
        { label: '¿Dónde me pueden atender si me siento mal?', places: [{ id: 'bienestar-universitario', name: 'Bienestar Universitario' }] },
        { label: '¿Dónde están los laboratorios de electrónica?', places: [{ id: 'facultad-ingenieria', name: 'Facultad de Ingeniería' }] },
        { label: '¿Dónde me puedo inscribir como estudiante nuevo?', places: [{ id: 'admisiones', name: 'Admisiones' }] },
        { label: '¿Dónde puedo imprimir o usar un computador?', places: [{ id: 'sala-sistemas', name: 'Sala de Sistemas' }] },
      ],
    },
    about: {
      title: 'Acerca del Aplicativo',
      body: 'Navis 3D es una plataforma de navegación interactiva diseñada para ayudar a estudiantes y visitantes a explorar el campus universitario en un entorno 3D inmersivo.\n\nUsa el panel izquierdo para buscar ubicaciones por categoría, realizar búsquedas directas y resolver tus dudas frecuentes.',
    },
    map: {
      zoomIn: 'Acercar',
      zoomOut: 'Alejar',
      myLocation: 'Restablecer vista',
    },
  },
};
