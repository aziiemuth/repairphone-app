'use client';

import styled, { keyframes } from 'styled-components';
import { Sun, Moon } from '@phosphor-icons/react';
import { useTheme } from '../../context/ThemeContext';

const rotate = keyframes`
  from { transform: rotate(-30deg) scale(0.8); opacity: 0; }
  to { transform: rotate(0) scale(1); opacity: 1; }
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.backgroundAlt : 'rgba(255, 255, 255, 0.1)')};
  border: 1px solid ${({ $scrolled, theme }) => ($scrolled ? theme.colors.border : 'rgba(255, 255, 255, 0.2)')};
  color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.text : 'white')};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  svg {
    animation: ${rotate} 0.3s ease;
  }

  &:hover {
    background: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.gradient : 'rgba(255, 255, 255, 0.2)')};
    color: white;
    border-color: ${({ $scrolled }) => ($scrolled ? 'transparent' : 'rgba(255, 255, 255, 0.3)')};
    transform: scale(1.08) rotate(10deg);
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadowMd};
  }
`;

export default function ThemeToggle({ $scrolled = true }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleButton
      $scrolled={$scrolled}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Mode Terang' : 'Mode Gelap'}
    >
      {isDark
        ? <Sun size={18} weight="duotone" />
        : <Moon size={18} weight="duotone" />
      }
    </ToggleButton>
  );
}
