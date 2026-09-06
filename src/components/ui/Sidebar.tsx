import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, GraduationCap, Building2, Briefcase, HelpCircle, Info } from 'lucide-react';
import type { LocationCategory } from '../../types/location';
import { useAppStore } from '../../store/useAppStore';

/* ─── divider ───────────────────────────────────────────────────────────────── */
const Divider = () => (
  <div
    style={{
      height: 1,
      margin: '6px 8px',
      background: 'var(--color-border)',
      flexShrink: 0,
    }}
  />
);

const FAQ_QUESTIONS = [
  { label: '¿Dónde se paga la matrícula?', places: [{ id: 'tesoreria', name: 'Tesorería y Pagos' }] },
  { label: '¿Dónde saco un certificado de notas?', places: [{ id: 'registro-control', name: 'Registro y Control' }] },
  { label: '¿Dónde me pueden atender si me siento mal?', places: [{ id: 'bienestar-universitario', name: 'Bienestar Universitario' }] },
  { label: '¿Dónde están los laboratorios de electrónica?', places: [{ id: 'facultad-ingenieria', name: 'Facultad de Ingeniería' }] },
  { label: '¿Dónde me puedo inscribir como estudiante nuevo?', places: [{ id: 'admisiones', name: 'Admisiones' }] },
  { label: '¿Dónde puedo imprimir o usar un computador?', places: [{ id: 'sala-sistemas', name: 'Sala de Sistemas' }] },
];

/* ─── overlay modal (for FAQ/About) ─────────────────────────────────────────── */
interface OverlayProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}
const Overlay: React.FC<OverlayProps> = ({ title, onClose, children }) => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.55)',
      backdropFilter: 'blur(4px)',
    }}
    onClick={onClose}
  >
    <div
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '28px 32px',
        maxWidth: 480,
        width: '90%',
        maxHeight: '80vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <h2 style={{ margin: 0, fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
          {title}
        </h2>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: 20,
            color: 'var(--color-text-muted)',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      </div>
      {children}
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════════
   THIN SIDEBAR
══════════════════════════════════════════════════════════════════════════════ */
export const Sidebar: React.FC = () => {
  const activeCategory = useAppStore((s) => s.activeCategory);
  const setActiveCategory = useAppStore((s) => s.setActiveCategory);
  const setSearchPanelOpen = useAppStore((s) => s.setSearchPanelOpen);
  const setSelectedLocationId = useAppStore((s) => s.setSelectedLocationId);
  
  const isSettingsOpen = useAppStore((s) => s.isSettingsOpen);
  const setSettingsOpen = useAppStore((s) => s.setSettingsOpen);
  const isFaqOpen = useAppStore((s) => s.isFaqOpen);
  const setFaqOpen = useAppStore((s) => s.setFaqOpen);
  const isAboutOpen = useAppStore((s) => s.isAboutOpen);
  const setAboutOpen = useAppStore((s) => s.setAboutOpen);


  const [faqAnswer, setFaqAnswer] = useState<{ id: string; name: string }[] | null>(null);

  const categories: { key: LocationCategory; icon: React.ReactNode }[] = [
    { key: 'facultad', icon: <GraduationCap size={20} /> },
    { key: 'administrativo', icon: <Building2 size={20} /> },
    { key: 'servicios', icon: <Briefcase size={20} /> },
  ];

  const categoryLabel: Record<LocationCategory, string> = {
    facultad: 'Facultades',
    administrativo: 'Administración',
    servicios: 'Servicios',
  };

  const SIDEBAR_W = 56;

  return (
    <>
      {/* ── SIDEBAR SHELL ──────────────────────────────────────────────── */}
      <aside
        style={{
          width: SIDEBAR_W,
          minWidth: SIDEBAR_W,
          height: '100%',
          backgroundColor: 'var(--color-surface)',
          borderRight: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 40, // Higher than search panel and drawer
          boxShadow: 'var(--shadow-md)',
        }}
      >
        {/* ── TOP: Hamburger Menu / Close ──────────────────────────────── */}
        <div style={{ padding: '12px 8px 8px', width: '100%' }}>
          <button
            title="Configuración"
            onClick={(e) => {
              e.stopPropagation();
              setSettingsOpen(!isSettingsOpen);
            }}
            style={{
              width: 40,
              height: 40,
              margin: '0 auto',
              background: isSettingsOpen ? 'var(--color-surface-hover)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background var(--transition-fast)',
            }}
          >
            {isSettingsOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <Divider />

        {/* ── CATEGORY FILTER BUTTONS ──────────────────────────────────── */}
        <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
          {categories.map(({ key, icon }) => (
            <button
              key={key}
              title={categoryLabel[key]}
              onClick={() => {
                setActiveCategory(activeCategory === key ? null : key);
                if (activeCategory !== key) {
                  setSearchPanelOpen(true);
                }
              }}
              style={{
                width: 40,
                height: 40,
                margin: '0 auto',
                background: activeCategory === key ? 'var(--color-primary)' : 'transparent',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                color: activeCategory === key ? '#fff' : 'var(--color-text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== key) (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface-hover)';
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== key) (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              }}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* spacer */}
        <div style={{ flex: 1 }} />

        {/* ── BOTTOM: FAQ + ABOUT ──────────────────────────────────────── */}
        <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: 8, width: '100%', paddingBottom: 16 }}>
          <Divider />
          <button
            title="Preguntas frecuentes"
            onClick={() => { setFaqAnswer(null); setFaqOpen(true); }}
            style={{
              width: 40,
              height: 40,
              margin: '0 auto',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface-hover)'}
            onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.background = 'transparent'}
          >
            <HelpCircle size={22} />
          </button>
          <button
            title="Acerca de"
            onClick={() => setAboutOpen(true)}
            style={{
              width: 40,
              height: 40,
              margin: '0 auto',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface-hover)'}
            onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.background = 'transparent'}
          >
            <Info size={22} />
          </button>
        </div>
      </aside>

      {/* ══════════════════════════════════════════════════════════════════
         FAQ OVERLAY
      ══════════════════════════════════════════════════════════════════ */}
      {isFaqOpen && createPortal(
        <Overlay title="Preguntas frecuentes" onClose={() => { setFaqOpen(false); setFaqAnswer(null); }}>
          <p
            style={{
              margin: '0 0 16px',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)',
            }}
          >
            ¿En qué te podemos ayudar?
          </p>

          {faqAnswer ? (
            <div>
              <div
                style={{
                  background: 'var(--color-surface-hover)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '16px 18px',
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-accent)',
                    marginBottom: 8,
                  }}
                >
                  Lugares relacionados
                </div>
                {faqAnswer.map((place) => (
                  <button
                    key={place.id}
                    onClick={() => {
                      // Cierra el FAQ y selecciona la ubicación
                      setSelectedLocationId(place.id);
                      setFaqOpen(false);
                      setFaqAnswer(null);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      padding: '8px 12px',
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      width: '100%',
                      cursor: 'pointer',
                      textAlign: 'left',
                      marginBottom: 8,
                      transition: 'all var(--transition-fast)',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-primary)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)')
                    }
                  >
                    <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>
                      <HelpCircle size={16} />
                    </div>
                    {place.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setFaqAnswer(null)}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '8px 14px',
                  cursor: 'pointer',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                ← Volver
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {FAQ_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setFaqAnswer(q.places)}
                  style={{
                    background: 'var(--color-surface-hover)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '12px 14px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 500,
                    transition: 'all var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-primary)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)')
                  }
                >
                  <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>
                    <HelpCircle size={18} />
                  </div>
                  {q.label}
                </button>
              ))}
            </div>
          )}
        </Overlay>,
        document.body,
      )}

      {/* ══════════════════════════════════════════════════════════════════
         ABOUT OVERLAY
      ══════════════════════════════════════════════════════════════════ */}
      {isAboutOpen && createPortal(
        <Overlay title="Acerca del aplicativo" onClose={() => setAboutOpen(false)}>
          <p
            style={{
              margin: 0,
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
            }}
          >
            Navis 3D es una plataforma de navegación interactiva diseñada para ayudar a estudiantes y visitantes a explorar el campus universitario en un entorno 3D inmersivo.

            Usa el panel izquierdo para buscar ubicaciones por categoría, realizar búsquedas directas y resolver tus dudas frecuentes.
          </p>
        </Overlay>,
        document.body,
      )}
    </>
  );
};
