import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  style,
  ...props
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: 'var(--color-secondary)',
          color: '#ffffff',
          border: '1px solid transparent',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-border)',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-text-primary)',
          border: '1px solid transparent',
        };
      case 'primary':
      default:
        return {
          backgroundColor: 'var(--color-primary)',
          color: '#ffffff',
          border: '1px solid transparent',
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return {
          padding: 'var(--spacing-xs) var(--spacing-sm)',
          fontSize: 'var(--font-size-sm)',
          borderRadius: 'var(--radius-sm)',
        };
      case 'lg':
        return {
          padding: 'var(--spacing-md) var(--spacing-lg)',
          fontSize: 'var(--font-size-lg)',
          borderRadius: 'var(--radius-lg)',
        };
      case 'md':
      default:
        return {
          padding: 'var(--spacing-sm) var(--spacing-md)',
          fontSize: 'var(--font-size-md)',
          borderRadius: 'var(--radius-md)',
        };
    }
  };

  const baseStyle: React.CSSProperties = {
    fontFamily: 'var(--font-family)',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-xs)',
    transition: 'all var(--transition-fast)',
    width: fullWidth ? '100%' : 'auto',
    outline: 'none',
    boxShadow: 'var(--shadow-sm)',
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style,
  };

  return (
    <button className={`navis-btn ${className}`} style={baseStyle} {...props}>
      {children}
    </button>
  );
};
