import React from 'react';

export interface MapBtnProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export const MapBtn: React.FC<MapBtnProps> = ({ icon, label, onClick }) => (
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
    onMouseEnter={(event) => {
      event.currentTarget.style.background = 'var(--color-surface-hover)';
    }}
    onMouseLeave={(event) => {
      event.currentTarget.style.background = 'var(--color-surface)';
    }}
  >
    {icon}
  </button>
);