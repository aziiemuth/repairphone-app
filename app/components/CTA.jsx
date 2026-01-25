'use client';

import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.gradient};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

const CTAContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: white;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary};
  background: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-decoration: none;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  }

  svg {
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover svg:last-child {
    transform: translateX(5px);
  }
`;

const WHATSAPP_NUMBER = '620816234185';
const WHATSAPP_MESSAGE = 'Halo, saya ingin konsultasi perbaikan software.';

export default function CTA() {
  var whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE);

  return (
    <Section id="kontak">
      <Container>
        <CTAContent>
          <ScrollAnimation animation="scaleIn">
            <CTATitle>Butuh Bantuan Sekarang?</CTATitle>
            <CTAText>
              Jangan biarkan masalah software mengganggu aktivitas kamu.
              Konsultasi gratis, respon cepat 24 jam!
            </CTAText>
          </ScrollAnimation>
          <CTAButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} />
            Chat WhatsApp Sekarang
            <ArrowRight size={20} />
          </CTAButton>
        </CTAContent>
      </Container>
    </Section>
  );
}
