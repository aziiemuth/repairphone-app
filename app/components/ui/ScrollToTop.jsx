'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowUp } from 'lucide-react';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px ${({ theme }) => theme.colors.shadow};
  transition: all ${({ theme }) => theme.transitions.normal};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '20px')});
  z-index: 999;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.colors.shadow};
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: 90px;
    right: 16px;
  }
`;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollButton $visible={visible} onClick={scrollToTop} aria-label="Scroll to top">
      <ArrowUp />
    </ScrollButton>
  );
}
