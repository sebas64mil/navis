import React, { useEffect, useState } from 'react';
import type { Location } from '../../types/location';
import { searchLocations } from '../../services/locationService';
import { LocationCard } from '../../features/navigation/LocationCard';
import { SearchBar } from '../ui/SearchBar';
import { Button } from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';
import { useAppStore } from '../../store/useAppStore';

export const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const isCollapsed = useAppStore((state) => state.isSidebarCollapsed);
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  const selectedLocationId = useAppStore((state) => state.selectedLocationId);
  const setSelectedLocationId = useAppStore((state) => state.setSelectedLocationId);
  const searchQuery = useAppStore((state) => state.searchQuery);
  const setSearchQuery = useAppStore((state) => state.setSearchQuery);

  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    searchLocations(searchQuery).then(setLocations);
  }, [searchQuery]);

  return (
    <aside
      style={{
        width: isCollapsed ? '56px' : '300px',
        minWidth: isCollapsed ? '56px' : '300px',
        height: '100%',
        backgroundColor: 'var(--color-surface)',
        borderRight: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width var(--transition-normal), min-width var(--transition-normal)',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {/* Sidebar Header & Collapse Toggle */}
      <div
        style={{
          padding: 'var(--spacing-sm)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'space-between',
          borderBottom: '1px solid var(--color-border)',
          minHeight: '52px',
          flexShrink: 0,
        }}
      >
        {!isCollapsed && (
          <span
            style={{
              fontWeight: 600,
              fontSize: 'var(--font-size-sm)',
              whiteSpace: 'nowrap',
              color: 'var(--color-text-primary)',
              paddingLeft: 'var(--spacing-xs)',
            }}
          >
            {t('navigation.locationsList')}
          </span>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          title={isCollapsed ? t('navigation.expandSidebar') : t('navigation.collapseSidebar')}
          style={{ flexShrink: 0 }}
        >
          {isCollapsed ? '→' : '←'}
        </Button>
      </div>

      {/* Expanded Content: Search and Location List */}
      {!isCollapsed && (
        <>
          <div
            style={{
              padding: 'var(--spacing-sm) var(--spacing-md)',
              borderBottom: '1px solid var(--color-border)',
              flexShrink: 0,
            }}
          >
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder={t('navigation.searchPlaceholder')}
            />
          </div>

          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: 'var(--spacing-sm) var(--spacing-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
            }}
          >
            {locations.map((loc) => (
              <LocationCard
                key={loc.id}
                location={loc}
                isSelected={loc.id === selectedLocationId}
                onSelect={(id) => setSelectedLocationId(id)}
                compact
              />
            ))}
            {locations.length === 0 && (
              <div
                style={{
                  textAlign: 'center',
                  color: 'var(--color-text-muted)',
                  padding: 'var(--spacing-lg)',
                  fontSize: 'var(--font-size-sm)',
                }}
              >
                {t('navigation.noResults')}
              </div>
            )}
          </div>

          {/* Footer: Back Button */}
          <div
            style={{
              padding: 'var(--spacing-md)',
              borderTop: '1px solid var(--color-border)',
              flexShrink: 0,
            }}
          >
            <Button
              variant="outline"
              fullWidth
              size="sm"
              onClick={() => setSelectedLocationId(null)}
            >
              ← {t('navigation.backToLocations')}
            </Button>
          </div>
        </>
      )}

      {/* Collapsed: Back icon only */}
      {isCollapsed && (
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 'var(--spacing-md)',
            gap: 'var(--spacing-md)',
          }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedLocationId(null)}
            title={t('navigation.backToLocations')}
          >
            ←
          </Button>
        </div>
      )}
    </aside>
  );
};
