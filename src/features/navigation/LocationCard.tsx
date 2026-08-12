import React from 'react';
import type { Location } from '../../types/location';
import { Button } from '../../components/ui/Button';
import { useTranslation } from '../../hooks/useTranslation';

export interface LocationCardProps {
  location: Location;
  onSelect: (id: string) => void;
  isSelected?: boolean;
  compact?: boolean;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  location,
  onSelect,
  isSelected = false,
  compact = false,
}) => {
  const { t } = useTranslation();
  const categoryLabel = t(`categories.${location.category}`) as string;

  return (
    <div
      onClick={() => onSelect(location.id)}
      style={{
        display: 'flex',
        flexDirection: compact ? 'row' : 'column',
        alignItems: compact ? 'center' : 'stretch',
        backgroundColor: isSelected ? 'var(--color-surface-hover)' : 'var(--color-surface)',
        border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
        boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        padding: compact ? 'var(--spacing-xs)' : '0',
        gap: compact ? 'var(--spacing-sm)' : '0',
      }}
    >
      <img
        src={location.image}
        alt={location.name}
        style={{
          width: compact ? '64px' : '100%',
          height: compact ? '64px' : '160px',
          objectFit: 'cover',
          borderRadius: compact ? 'var(--radius-md)' : '0',
          flexShrink: 0,
        }}
      />

      <div
        style={{
          padding: compact ? '0' : 'var(--spacing-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-xs)',
          flex: 1,
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontSize: 'var(--font-size-xs)',
            fontWeight: 600,
            color: 'var(--color-accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          #{categoryLabel}
        </span>

        <h3
          style={{
            margin: 0,
            fontSize: compact ? 'var(--font-size-sm)' : 'var(--font-size-md)',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {location.name}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-secondary)',
            display: '-webkit-box',
            WebkitLineClamp: compact ? 2 : 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.4,
          }}
        >
          {location.description}
        </p>

        {!compact && (
          <div style={{ marginTop: 'var(--spacing-sm)' }}>
            <Button
              variant={isSelected ? 'secondary' : 'primary'}
              fullWidth
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(location.id);
              }}
            >
              {isSelected ? t('location.selected') : t('location.select')}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
