'use client';

import styled from 'styled-components';
import { WhatsappLogo } from '@phosphor-icons/react';
import Container from './ui/Container';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const Inner = styled.div`
  position: relative;
  text-align: center;
  max-width: 580px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const MainCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 14px 32px rgba(37, 211, 102, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  svg { flex-shrink: 0; }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const WHATSAPP_URL = 'https://wa.me/62816234185?text=' + encodeURIComponent('Halo, saya ingin konsultasi perbaikan software.');

export default function CTA() {
  return (
    <Section id="kontak" aria-label="Konsultasi Perbaikan">
      <Container>
        <ScrollAnimation animation="scaleIn">
          <Inner>
            <Title>
              Butuh perbaikan software di Banyuwangi?
            </Title>
            <Description>
              Jangan biarkan masalah software mengganggu aktivitas kamu.
              Konsultasi gratis, respon cepat, harga terjangkau.
            </Description>

            <MainCTA
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi kami via WhatsApp untuk konsultasi gratis perbaikan software"
            >
              <WhatsappLogo size={22} weight="fill" />
              Hubungi Kami
            </MainCTA>
          </Inner>
        </ScrollAnimation>
      </Container>
    </Section>
  );
}
