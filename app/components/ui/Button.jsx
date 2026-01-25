'use client';

import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.gradient};
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px ${({ theme }) => theme.colors.shadow};
    }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  `,
  whatsapp: css`
    background: ${({ theme }) => theme.colors.whatsapp};
    color: white;
    
    &:hover {
      background: ${({ theme }) => theme.colors.whatsappHover};
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    
    &:hover {
      background: ${({ theme }) => theme.colors.backgroundAlt};
    }
  `,
};

const sizes = {
  sm: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `,
  md: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `,
  lg: css`
    padding: 1rem 2rem;
    font-size: 1.125rem;
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  border: none;
  white-space: nowrap;

  ${({ $variant }) => variants[$variant] || variants.primary}
  ${({ $size }) => sizes[$size] || sizes.md}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    width: 1.25em;
    height: 1.25em;
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
