import { create } from 'zustand';
import type { LocationCategory } from '../types/location';
import type { NavigationNode } from '../types/navigation';

export type AppTheme = 'light' | 'dark';

interface AppState {
  // Navigation / location
  selectedLocationId: string | null;
  routePath: number[] | null;
  navigationNodes: NavigationNode[];
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

  // Actions
  setSelectedLocationId: (id: string | null) => void;
  setRoutePath: (path: number[] | null) => void;
  setNavigationNodes: (nodes: NavigationNode[]) => void;
  setSearchQuery: (query: string) => void;
  setActiveCategory: (cat: LocationCategory | null) => void;
  setSearchPanelOpen: (open: boolean) => void;

  setSettingsOpen: (open: boolean) => void;
  setFaqOpen: (open: boolean) => void;
  setAboutOpen: (open: boolean) => void;

  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedLocationId: null,
  routePath: null,
  navigationNodes: [],
  searchQuery: '',
  activeCategory: null,
  
  isSearchPanelOpen: false,

  isSettingsOpen: false,
  isFaqOpen: false,
  isAboutOpen: false,

  theme: 'dark',

  setSelectedLocationId: (id) => set({ selectedLocationId: id }),
  setRoutePath: (path) => set({ routePath: path }),
  setNavigationNodes: (nodes) => set({ navigationNodes: nodes }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveCategory: (cat) => set({ activeCategory: cat, isSearchPanelOpen: cat !== null }),
  setSearchPanelOpen: (open) => set({ isSearchPanelOpen: open }),

  setSettingsOpen: (open) => set({ isSettingsOpen: open }),
  setFaqOpen: (open) => set({ isFaqOpen: open }),
  setAboutOpen: (open) => set({ isAboutOpen: open }),

  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
