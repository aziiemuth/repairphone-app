'use client';

import styled, { keyframes } from 'styled-components';
import { ChatsCircle, MagnifyingGlass, Wrench, CheckCircle, ArrowRight } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.04); opacity: 0.85; }
`;

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ConnectorLine = styled.div`
  position: absolute;
  top: 52px;
  left: calc(12.5% + 40px);
  width: calc(75% - 80px);
  height: 2px;
  z-index: 0;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 50%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  opacity: 0.25;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const StepCard = styled.div`
  padding: 2rem 1.5rem;
  text-align: center;
  position: relative;
  z-index: 1;
  cursor: default;
`;

const StepCircle = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1.75rem;
`;

const IconRing = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadow};
  position: relative;

  /* gradient ring on hover */
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: ${({ $gradient }) => $gradient};
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  ${StepCard}:hover & {
    transform: scale(1.1);
    background: ${({ $gradient }) => $gradient};
    color: white;
    border-color: transparent;
    box-shadow: 0 16px 40px ${({ theme }) => theme.colors.shadowMd};

    &::before {
      opacity: 0.3;
    }
  }
`;

const StepBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 28px;
  height: 28px;
  background: ${({ $gradient }) => $gradient};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  border: 2px solid ${({ theme }) => theme.colors.backgroundAlt};
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;

const StepTitle = styled.h3`
  font-size: 1.0625rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.625rem;
  letter-spacing: -0.01em;
`;

const StepDesc = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
`;

const steps = [
  {
    Icon: ChatsCircle,
    title: 'Konsultasi',
    desc: 'Hubungi kami & jelaskan masalah device Anda untuk estimasi awal.',
    gradient: 'linear-gradient(135deg, #0EA5E9, #6366F1)',
  },
  {
    Icon: MagnifyingGlass,
    title: 'Diagnosa',
    desc: 'Kami cek lebih detail untuk mengetahui sumber masalah yang akurat.',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
  },
  {
    Icon: Wrench,
    title: 'Perbaikan',
    desc: 'Proses pengerjaan dilakukan oleh teknisi ahli secara profesional.',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
  },
  {
    Icon: CheckCircle,
    title: 'Selesai',
    desc: 'Device kembali normal, data aman, dan siap Anda gunakan kembali.',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
  },
];

export default function Process() {
  return (
    <Section>
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Cara Kerja Kami"
            subtitle="Proses perbaikan yang transparan, cepat, dan mudah dipahami dalam 4 langkah."
          />
        </ScrollAnimation>

        <StepsGrid>
          <ConnectorLine />
          {steps.map(function(step, index) {
            return (
              <ScrollAnimation key={step.title} animation="fadeInUp" delay={index * 0.12}>
                <StepCard>
                  <StepCircle>
                    <IconRing $gradient={step.gradient}>
                      <step.Icon size={36} weight="duotone" />
                    </IconRing>
                    <StepBadge $gradient={step.gradient}>{index + 1}</StepBadge>
                  </StepCircle>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDesc>{step.desc}</StepDesc>
                </StepCard>
              </ScrollAnimation>
            );
          })}
        </StepsGrid>
      </Container>
    </Section>
  );
}
