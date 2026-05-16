'use client';

import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.gradient};
    color: white;
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadowMd};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 28px ${({ theme }) => theme.colors.shadowHover};
      opacity: 0.95;
    }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadowHover};
    }
  `,
  whatsapp: css`
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    color: white;
    box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);

    &:hover {
      background: linear-gradient(135deg, #2ee874 0%, #17a083 100%);
      transform: translateY(-2px);
      box-shadow: 0 10px 28px rgba(37, 211, 102, 0.45);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};

    &:hover {
      background: ${({ theme }) => theme.colors.backgroundAlt};
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  glass: css`
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1.5px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);

    &:hover {
      background: rgba(255, 255, 255, 0.18);
      border-color: rgba(255, 255, 255, 0.35);
      transform: translateY(-2px);
    }
  `,
};

const sizes = {
  sm: css`
    padding: 0.5rem 1.125rem;
    font-size: 0.8125rem;
    border-radius: 10px;
    gap: 0.375rem;
  `,
  md: css`
    padding: 0.75rem 1.625rem;
    font-size: 0.9375rem;
    border-radius: 12px;
    gap: 0.5rem;
  `,
  lg: css`
    padding: 0.9375rem 2.125rem;
    font-size: 1.0625rem;
    border-radius: 14px;
    gap: 0.625rem;
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  ${({ $variant }) => variants[$variant] || variants.primary}
  ${({ $size }) => sizes[$size] || sizes.md}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  svg {
    flex-shrink: 0;
  }
`;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}) {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  );
}
