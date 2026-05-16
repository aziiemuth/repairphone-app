'use client';

import styled, { keyframes } from 'styled-components';
import { WhatsappLogo } from '@phosphor-icons/react';

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55); }
  70% { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const FloatButton = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 58px;
  height: 58px;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
  cursor: pointer;
  z-index: 1000;
  animation: ${pulse} 2.5s ease-in-out infinite,
             ${float} 3s ease-in-out infinite;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.12);
    box-shadow: 0 12px 36px rgba(37, 211, 102, 0.55);
    animation-play-state: paused;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: 20px;
    right: 16px;
    width: 52px;
    height: 52px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  right: 70px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.shadowDark};
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 0;
  visibility: hidden;
  transform: translateX(8px);
  transition: all 0.2s ease;
  pointer-events: none;

  /* Arrow */
  &::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.colors.surface};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    transform: translateY(-50%) rotate(45deg);
  }

  ${FloatButton}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const WHATSAPP_URL = 'https://wa.me/62816234185?text=' + encodeURIComponent('Halo, saya ingin konsultasi perbaikan software.');

export default function WhatsAppFloat() {
  return (
    <FloatButton
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
    >
      <Tooltip>Chat via WhatsApp 💬</Tooltip>
      <WhatsappLogo size={30} weight="fill" />
    </FloatButton>
  );
}
