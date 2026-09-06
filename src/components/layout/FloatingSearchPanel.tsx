import React, { useEffect, useState } from 'react';
import type { Location } from '../../types/location';
import { searchLocations } from '../../features/navigation/locationService';
import { SearchBar } from '../ui/SearchBar';
import { useAppStore } from '../../store/useAppStore';

/* ─── location list item (adapted from Sidebar) ─────────────────────────────── */
const LocationItem: React.FC<{
  loc: Location;
  isSelected: boolean;
  onSelect: (id: string) => void;
  categoryLabel: string;
}> = ({ loc, isSelected, onSelect, categoryLabel }) => (
  <div
    onClick={() => onSelect(loc.id)}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 10px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: isSelected ? 'var(--color-primary)' : 'transparent',
      color: isSelected ? '#fff' : 'var(--color-text-primary)',
      transition: 'all var(--transition-fast)',
      border: `1px solid ${isSelected ? 'var(--color-primary)' : 'transparent'}`,
    }}
    onMouseEnter={(e) => {
      if (!isSelected) (e.currentTarget as HTMLDivElement).style.background = 'var(--color-surface-hover)';
    }}
    onMouseLeave={(e) => {
      if (!isSelected) (e.currentTarget as HTMLDivElement).style.background = 'transparent';
    }}
  >
    <img
      src={loc.image}
      alt={loc.name}
      style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}
    />
    <div style={{ minWidth: 0 }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          marginBottom: 2,
          padding: '2px 8px',
          borderRadius: 999,
          background: isSelected ? 'rgba(255,255,255,0.14)' : 'var(--color-surface-hover)',
          color: isSelected ? '#fff' : 'var(--color-text-secondary)',
          fontSize: 'var(--font-size-xs)',
          fontWeight: 700,
        }}
      >
        #{categoryLabel}
      </div>
      <div
        style={{
          fontSize: 'var(--font-size-sm)',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {loc.name}
      </div>
      <div
        style={{
          fontSize: 'var(--font-size-xs)',
          color: isSelected ? 'rgba(255,255,255,0.75)' : 'var(--color-text-muted)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {loc.description.slice(0, 55)}…
      </div>
    </div>
  </div>
);

export const FloatingSearchPanel: React.FC = () => {
  const searchQuery = useAppStore((s) => s.searchQuery);
  const setSearchQuery = useAppStore((s) => s.setSearchQuery);
  const activeCategory = useAppStore((s) => s.activeCategory);
  const setActiveCategory = useAppStore((s) => s.setActiveCategory);
  const isSettingsOpen = useAppStore((s) => s.isSettingsOpen);
  const isSearchPanelOpen = useAppStore((s) => s.isSearchPanelOpen);
  const setSearchPanelOpen = useAppStore((s) => s.setSearchPanelOpen);
  const selectedLocationId = useAppStore((s) => s.selectedLocationId);
  const setSelectedLocationId = useAppStore((s) => s.setSelectedLocationId);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);

  useEffect(() => {
    const effectiveQuery = activeCategory ? `#${activeCategory} ${searchQuery}`.trim() : searchQuery;
    searchLocations(effectiveQuery).then(setFilteredLocations);
  }, [activeCategory, searchQuery]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0 && !isSearchPanelOpen) {
      setSearchPanelOpen(true);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 24,
        left: isSettingsOpen ? 340 : 80,
        width: 380,
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      {/* Search Input Box */}
      <div
        style={{
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)',
          overflow: 'hidden', // to ensure SearchBar doesn't break border radius
        }}
        onClick={() => {
          if (!isSearchPanelOpen) setSearchPanelOpen(true);
        }}
      >
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Buscar ubicaciones..."
        />
      </div>

      {/* Results Dropdown Panel */}
      {isSearchPanelOpen && (
        <div
          style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--color-border)',
            maxHeight: '60vh',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px',
          }}
        >
          {/* Header to close panel or clear filters */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px 12px' }}>
             <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
               Resultados
             </span>
             <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
               {activeCategory && (
                 <button
                   onClick={() => setActiveCategory(null)}
                   style={{
                     background: 'transparent',
                     border: '1px solid var(--color-border)',
                     color: 'var(--color-text-secondary)',
                     cursor: 'pointer',
                     fontSize: 'var(--font-size-xs)',
                     fontWeight: 700,
                     borderRadius: '999px',
                     padding: '4px 10px',
                   }}
                 >
                   Quitar filtro
                 </button>
               )}
               <button
                 onClick={() => setSearchPanelOpen(false)}
                 style={{
                   background: 'transparent',
                   border: 'none',
                   color: 'var(--color-text-secondary)',
                   cursor: 'pointer',
                   fontSize: 16,
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   padding: 4,
                 }}
               >
                 ✕
               </button>
             </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {filteredLocations.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  color: 'var(--color-text-muted)',
                  padding: '24px 0',
                  fontSize: 'var(--font-size-sm)',
                }}
              >
                No se encontraron ubicaciones
              </div>
            ) : (
              filteredLocations.map((loc) => (
                <LocationItem
                  key={loc.id}
                  loc={loc}
                  isSelected={loc.id === selectedLocationId}
                  categoryLabel={loc.category}
                  onSelect={(id) => setSelectedLocationId(id === selectedLocationId ? null : id)}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
