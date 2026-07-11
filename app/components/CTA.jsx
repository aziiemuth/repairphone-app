'use client';

import styled, { keyframes } from 'styled-components';
import { WhatsappLogo, ArrowRight, Lightning, ShieldCheck, Clock } from '@phosphor-icons/react';
import Container from './ui/Container';
import ScrollAnimation from './ui/ScrollAnimation';

const gradientAnim = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const Section = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, #0F172A 0%, #1a1060 50%, #0C4A6E 100%);
  background-size: 200% 200%;
  animation: ${gradientAnim} 12s ease infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }

  /* Glow blobs */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(ellipse at center, rgba(14,165,233,0.15) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
`;

const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(56, 189, 248, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Description = styled.p`
  font-size: 1.0625rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.75;
  margin-bottom: 2.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const MainCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2.25rem;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 28px rgba(37, 211, 102, 0.4);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 16px 40px rgba(37, 211, 102, 0.5);
  }

  svg { flex-shrink: 0; }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const SecondaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 1rem 2.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.35);
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const TrustRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  font-weight: 500;

  svg { color: #34D399; }
`;

const WHATSAPP_URL = 'https://wa.me/62816234185?text=' + encodeURIComponent('Halo, saya ingin konsultasi perbaikan software.');

export default function CTA() {
  return (
    <Section id="kontak">
      <Container>
        <ScrollAnimation animation="scaleIn">
          <Inner>
            <Eyebrow>
              <Lightning size={14} weight="fill" />
              Layanan 24 Jam Nonstop
            </Eyebrow>
            <Title>
              Butuh <span>Flashing HP</span> atau
              <br />Perbaikan Software di Banyuwangi?
            </Title>
            <Description>
              Jangan biarkan masalah software mengganggu aktivitas kamu.
              Athif Software Solutions siap membantu — konsultasi gratis,
              respon cepat, harga terjangkau!
            </Description>

            <TrustRow>
              <TrustItem>
                <Clock size={16} weight="duotone" />
                Respon dalam menit
              </TrustItem>
              <TrustItem>
                <ShieldCheck size={16} weight="duotone" />
                Garansi 30 hari
              </TrustItem>
              <TrustItem>
                <Lightning size={16} weight="duotone" />
                Konsultasi gratis
              </TrustItem>
            </TrustRow>
          </Inner>
        </ScrollAnimation>
      </Container>
    </Section>
  );
}
