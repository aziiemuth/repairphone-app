'use client';

import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ArrowUp } from '@phosphor-icons/react';

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

const Btn = styled.button`
  position: fixed;
  bottom: 100px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.gradient};
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px ${({ theme }) => theme.colors.shadowMd};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '16px')});
  z-index: 999;

  &:hover {
    transform: translateY(-4px) scale(1.08);
    box-shadow: 0 12px 28px ${({ theme }) => theme.colors.shadowHover};
    animation: ${bounce} 0.6s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: 88px;
    right: 16px;
    width: 44px;
    height: 44px;
  }
`;

export default function ScrollToTop() {
  var [visible, setVisible] = useState(false);

  useEffect(function() {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return function() { window.removeEventListener('scroll', handleScroll); };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Btn $visible={visible} onClick={scrollToTop} aria-label="Kembali ke bagian paling atas halaman">
      <ArrowUp size={20} weight="bold" />
    </Btn>
  );
}
