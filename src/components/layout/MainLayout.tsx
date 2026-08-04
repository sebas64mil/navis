import React from 'react';
import { Sidebar } from './Sidebar';
import { MainScene } from '../../three/scenes/MainScene';
import { Button } from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';
import { useAppStore } from '../../store/useAppStore';

export const MainLayout: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text-primary)',
      }}
    >
      {/* LEFT PANEL */}
      <Sidebar />

      {/* CENTER & RIGHT CONTENT */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
        {/* Floating Top Controls Header */}
        <header
          style={{
            position: 'absolute',
            top: 'var(--spacing-md)',
            right: 'var(--spacing-md)',
            zIndex: 20,
            display: 'flex',
            gap: 'var(--spacing-sm)',
            backgroundColor: 'var(--color-surface)',
            padding: 'var(--spacing-xs) var(--spacing-sm)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          >
            🌐 {language === 'en' ? 'ES' : 'EN'}
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
        </header>

        <div style={{ flex: 1, display: 'flex', width: '100%', height: '100%' }}>
          {/* CENTER: Three.js Viewport */}
          <main style={{ flex: 1, height: '100%', position: 'relative' }}>
            <MainScene />
          </main>

          {/* RIGHT PANEL: Left empty for future features */}
          <aside
            style={{
              width: '0px', // Empty for now as requested
              height: '100%',
              backgroundColor: 'var(--color-surface)',
              transition: 'width var(--transition-normal)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
