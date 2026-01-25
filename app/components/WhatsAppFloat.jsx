'use client';

import styled, { keyframes } from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const FloatButton = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.whatsapp};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  z-index: 1000;
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.whatsappHover};
  }

  svg {
    width: 32px;
    height: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: 20px;
    right: 16px;
    width: 56px;
    height: 56px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const Tooltip = styled.span`
  position: absolute;
  right: 70px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  box-shadow: 0 4px 15px ${({ theme }) => theme.colors.shadow};
  opacity: 0;
  visibility: hidden;
  transition: all ${({ theme }) => theme.transitions.fast};

  ${FloatButton}:hover & {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const WHATSAPP_NUMBER = '62816234185';
const WHATSAPP_MESSAGE = 'Halo, saya ingin konsultasi perbaikan software.';

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <FloatButton 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
    >
      <Tooltip>Chat via WhatsApp</Tooltip>
      <FaWhatsapp />
    </FloatButton>
  );
}
