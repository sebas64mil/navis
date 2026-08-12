import React from 'react';
import { Sidebar } from './Sidebar';
import { FloatingSearchPanel } from './FloatingSearchPanel';
import { MainScene } from '../../three/scenes/MainScene';
import { useTranslation } from '../../hooks/useTranslation';
import { useAppStore } from '../../store/useAppStore';
import { Plus, Minus, Focus, Sun, Moon, X } from 'lucide-react';

const DRAWER_WIDTH = 260;

/* ── Map control button ─────────────────────────────────────────────────────── */
interface MapBtnProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}
const MapBtn: React.FC<MapBtnProps> = ({ icon, label, onClick }) => (
  <button
    title={label}
    onClick={onClick}
    style={{
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-border)',
      background: 'var(--color-surface)',
      color: 'var(--color-text-primary)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)',
      transition: 'all var(--transition-fast)',
    }}
    onMouseEnter={(e) =>
      ((e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface-hover)')
    }
    onMouseLeave={(e) =>
      ((e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface)')
    }
  >
    {icon}
  </button>
);

const SettingsDrawer: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const isSettingsOpen = useAppStore((state) => state.isSettingsOpen);
  const setSettingsOpen = useAppStore((state) => state.setSettingsOpen);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: DRAWER_WIDTH,
        height: '100%',
        background: 'var(--color-surface)',
        borderRight: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-lg)',
        padding: '24px 20px',
        zIndex: 35,
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
        transform: isSettingsOpen ? 'translateX(0)' : `translateX(-${DRAWER_WIDTH}px)`,
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ margin: '8px 0 0', fontSize: 'var(--font-size-md)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
          Configuración
        </h3>
        <button
          onClick={() => setSettingsOpen(false)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
          }}
          title={t('sidebar.settings') as string}
        >
          <X size={18} />
        </button>
      </div>

      <div>
        <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {t('settings.theme') as string}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['light', 'dark'] as const).map((th) => (
            <button
              key={th}
              onClick={() => { if (th !== theme) toggleTheme(); }}
              style={{
                flex: 1,
                padding: '10px 0',
                borderRadius: 'var(--radius-md)',
                border: `2px solid ${theme === th ? 'var(--color-primary)' : 'var(--color-border)'}`,
                background: theme === th ? 'var(--color-primary)' : 'transparent',
                color: theme === th ? '#fff' : 'var(--color-text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all var(--transition-fast)',
              }}
            >
              {th === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {t('settings.language') as string}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['es', 'en'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              style={{
                flex: 1,
                padding: '10px 0',
                borderRadius: 'var(--radius-md)',
                border: `2px solid ${language === lang ? 'var(--color-primary)' : 'var(--color-border)'}`,
                background: language === lang ? 'var(--color-primary)' : 'transparent',
                color: language === lang ? '#fff' : 'var(--color-text-primary)',
                cursor: 'pointer',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                transition: 'all var(--transition-fast)',
              }}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN LAYOUT
══════════════════════════════════════════════════════════════════════════════ */
export const MainLayout: React.FC = () => {
  const { t } = useTranslation();
  const isSettingsOpen = useAppStore((state) => state.isSettingsOpen);

  // These refs are passed down to MainScene via the store or context.
  // For now they dispatch custom events that MainScene listens to.
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
          <MapBtn icon={<Plus size={20} />} label={t('map.zoomIn') as string} onClick={handleZoomIn} />
          <MapBtn icon={<Minus size={20} />} label={t('map.zoomOut') as string} onClick={handleZoomOut} />
          <MapBtn icon={<Focus size={20} />} label={t('map.myLocation') as string} onClick={handleMyLocation} />
        </div>
      </main>
    </div>
  );
};
