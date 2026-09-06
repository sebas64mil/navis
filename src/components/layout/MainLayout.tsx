import React from 'react';
import { Sidebar } from '../ui/Sidebar';
import { FloatingSearchPanel } from './FloatingSearchPanel';
import { MainScene } from '../../three/scenes/MainScene';
import { useAppStore } from '../../store/useAppStore';
import { MapBtn } from './MapBtn';
import { RouteTester } from './RouteTester';
import { SettingsDrawer } from '../ui/SettingsDrawer';
import { Plus, Minus, Focus } from 'lucide-react';

const DRAWER_WIDTH = 260;

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN LAYOUT
══════════════════════════════════════════════════════════════════════════════ */
export const MainLayout: React.FC = () => {
  const isSettingsOpen = useAppStore((state) => state.isSettingsOpen);


  const handleZoomIn = () => window.dispatchEvent(new CustomEvent('navis:zoom', { detail: 1 }));
  const handleZoomOut = () => window.dispatchEvent(new CustomEvent('navis:zoom', { detail: -1 }));
  const handleMyLocation = () => window.dispatchEvent(new CustomEvent('navis:resetCamera'));

  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text-primary)',
        position: 'relative',
      }}
    >
      <SettingsDrawer />

      {/* LEFT PANEL — Sidebar */}
      <div
        style={{
          transform: isSettingsOpen ? `translateX(${DRAWER_WIDTH}px)` : 'translateX(0)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </div>
      
      {/* FLOATING SEARCH PANEL */}
      <FloatingSearchPanel />

      {/* CENTER: Three.js Viewport */}
      <main style={{ flex: 1, height: '100%', position: 'relative' }}>
        <MainScene />

        <RouteTester />

        {/* ── Map controls — bottom-right ──────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            right: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            zIndex: 20,
          }}
        >
          <MapBtn icon={<Plus size={20} />} label="Acercar" onClick={handleZoomIn} />
          <MapBtn icon={<Minus size={20} />} label="Alejar" onClick={handleZoomOut} />
          <MapBtn icon={<Focus size={20} />} label="Restablecer vista" onClick={handleMyLocation} />
        </div>
      </main>
    </div>
  );
};
