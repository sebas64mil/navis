import React from 'react';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <svg
        style={{
          position: 'absolute',
          left: 'var(--spacing-sm)',
          width: '18px',
          height: '18px',
          fill: 'none',
          stroke: 'var(--color-text-muted)',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          pointerEvents: 'none',
        }}
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: 'var(--spacing-sm) var(--spacing-md) var(--spacing-sm) 2.5rem',
          fontSize: 'var(--font-size-sm)',
          fontFamily: 'var(--font-family)',
          color: 'var(--color-text-primary)',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          outline: 'none',
          transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
        }}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          style={{
            position: 'absolute',
            right: 'var(--spacing-sm)',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-muted)',
            cursor: 'pointer',
            padding: '2px',
            display: 'flex',
            alignItems: 'center',
          }}
          title="Clear search"
        >
          <svg
            style={{ width: '16px', height: '16px', stroke: 'currentColor', strokeWidth: 2 }}
            viewBox="0 0 24 24"
            fill="none"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
};
