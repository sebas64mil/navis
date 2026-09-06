import React from 'react';
import { Moon, Sun, X } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

const DRAWER_WIDTH = 260;

export const SettingsDrawer: React.FC = () => {
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
          title="Cerrar configuración"
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
        >
          <X size={18} />
        </button>
      </div>

      <div>
        <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Tema
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['light', 'dark'] as const).map((value) => (
            <button
              key={value}
              onClick={() => { if (value !== theme) toggleTheme(); }}
              aria-label={value === 'light' ? 'Modo claro' : 'Modo oscuro'}
              style={{
                flex: 1,
                padding: '10px 0',
                borderRadius: 'var(--radius-md)',
                border: `2px solid ${theme === value ? 'var(--color-primary)' : 'var(--color-border)'}`,
                background: theme === value ? 'var(--color-primary)' : 'transparent',
                color: theme === value ? '#fff' : 'var(--color-text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all var(--transition-fast)',
              }}
            >
              {value === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};