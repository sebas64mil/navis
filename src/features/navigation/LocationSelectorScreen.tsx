import React, { useEffect, useState } from 'react';
import type { Location } from '../../types/location';
import { searchLocations } from './locationService';
import { LocationCard } from './LocationCard';
import { SearchBar } from '../../components/ui/SearchBar';
import { Button } from '../../components/ui/Button';
import { useAppStore } from '../../store/useAppStore';

export const LocationSelectorScreen: React.FC = () => {
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const setSelectedLocationId = useAppStore((state) => state.setSelectedLocationId);

  const [locations, setLocations] = useState<Location[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    searchLocations(query).then(setLocations);
  }, [query]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text-primary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'var(--spacing-xl) var(--spacing-lg)',
        boxSizing: 'border-box',
        overflowY: 'auto',
      }}
    >
      {/* Top Bar / Actions */}
      <header
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--spacing-2xl)',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: 'var(--font-size-md)',
            }}
          >
            N
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: 'var(--font-size-lg)',
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}
          >
            Navis 3D
          </span>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
          <Button variant="outline" size="sm" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro'}
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', maxWidth: '600px' }}>
          <h1
            style={{
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 700,
              margin: '0 0 var(--spacing-sm) 0',
              lineHeight: 1.2,
              color: 'var(--color-text-primary)',
            }}
          >
            Plataforma de Navegación 3D
          </h1>
          <p
            style={{
              fontSize: 'var(--font-size-md)',
              color: 'var(--color-text-secondary)',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Seleccione una ubicación para iniciar la vista 3D interactiva
          </p>
        </div>

        <div style={{ width: '100%', maxWidth: '480px', marginBottom: 'var(--spacing-xl)' }}>
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Buscar ubicaciones..."
          />
        </div>

        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 'var(--spacing-lg)',
          }}
        >
          {locations.map((loc) => (
            <LocationCard
              key={loc.id}
              location={loc}
              onSelect={(id) => setSelectedLocationId(id)}
            />
          ))}
          {locations.length === 0 && (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: 'var(--spacing-2xl)',
                color: 'var(--color-text-muted)',
              }}
            >
              No se encontraron ubicaciones
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
