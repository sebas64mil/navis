import { create } from 'zustand';
import type { SupportedLanguage } from '../core/i18n';
import type { LocationCategory } from '../types/location';

export type AppTheme = 'light' | 'dark';

interface AppState {
  // Navigation / location
  selectedLocationId: string | null;
  searchQuery: string;
  activeCategory: LocationCategory | null;
  
  // UI Panels
  isSearchPanelOpen: boolean;

  // Modals / overlays / dropdowns
  isSettingsOpen: boolean;
  isFaqOpen: boolean;
  isAboutOpen: boolean;

  // Appearance
  theme: AppTheme;
  language: SupportedLanguage;

  // Actions
  setSelectedLocationId: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setActiveCategory: (cat: LocationCategory | null) => void;
  setSearchPanelOpen: (open: boolean) => void;

  setSettingsOpen: (open: boolean) => void;
  setFaqOpen: (open: boolean) => void;
  setAboutOpen: (open: boolean) => void;

  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
  setLanguage: (lang: SupportedLanguage) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedLocationId: null,
  searchQuery: '',
  activeCategory: null,
  
  isSearchPanelOpen: false,

  isSettingsOpen: false,
  isFaqOpen: false,
  isAboutOpen: false,

  theme: 'dark',
  language: 'es',

  setSelectedLocationId: (id) => set({ selectedLocationId: id }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveCategory: (cat) => set({ activeCategory: cat, isSearchPanelOpen: cat !== null }),
  setSearchPanelOpen: (open) => set({ isSearchPanelOpen: open }),

  setSettingsOpen: (open) => set({ isSettingsOpen: open }),
  setFaqOpen: (open) => set({ isFaqOpen: open }),
  setAboutOpen: (open) => set({ isAboutOpen: open }),

  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setLanguage: (lang) => set({ language: lang }),
}));
