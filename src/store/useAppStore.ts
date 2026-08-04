import { create } from 'zustand';
import type { SupportedLanguage } from '../core/i18n';

export type AppTheme = 'light' | 'dark';

interface AppState {
  selectedLocationId: string | null;
  isSidebarCollapsed: boolean;
  searchQuery: string;
  theme: AppTheme;
  language: SupportedLanguage;

  setSelectedLocationId: (id: string | null) => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setSearchQuery: (query: string) => void;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
  setLanguage: (lang: SupportedLanguage) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedLocationId: null,
  isSidebarCollapsed: false,
  searchQuery: '',
  theme: 'light',
  language: 'en',

  setSelectedLocationId: (id) => set({ selectedLocationId: id }),
  toggleSidebar: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
  setSidebarCollapsed: (collapsed) => set({ isSidebarCollapsed: collapsed }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setLanguage: (lang) => set({ language: lang }),
}));
