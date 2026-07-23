'use client';

import styled from 'styled-components';
import { ChatsCircle, MagnifyingGlass, Wrench, CheckCircle } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const Timeline = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-top: 1rem;

  /* Connector line */
  &::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 56px;
    right: 56px;
    height: 2px;
    background: ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 0;

    &::before {
      top: 0;
      bottom: 0;
      left: 27px;
      right: auto;
      width: 2px;
      height: auto;
    }
  }
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    text-align: left;
    gap: 1.25rem;
    padding: 0 0 2rem 0;
  }
`;

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto 1.25rem;
  transition: all 0.3s ease;
  flex-shrink: 0;

  ${Step}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0;
  }
`;

const StepContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 0.25rem;
  }
`;

const StepTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const StepDesc = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: none;
    margin: 0;
  }
`;

const steps = [
  {
    Icon: ChatsCircle,
    title: 'Konsultasi',
    desc: 'Hubungi kami via WhatsApp untuk estimasi awal.',
  },
  {
    Icon: MagnifyingGlass,
    title: 'Diagnosa',
    desc: 'Cek detail untuk mengetahui sumber masalah.',
  },
  {
    Icon: Wrench,
    title: 'Perbaikan',
    desc: 'Pengerjaan oleh teknisi ahli secara profesional.',
  },
  {
    Icon: CheckCircle,
    title: 'Selesai',
    desc: 'Device normal, data aman, siap digunakan.',
  },
];

export default function Process() {
  return (
    <Section id="proses" aria-label="Cara Kerja">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Cara Kerja Kami"
            subtitle="Proses perbaikan yang transparan dan mudah dipahami."
          />
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <Timeline>
            {steps.map(function(step, index) {
              return (
                <Step key={step.title}>
                  <StepNumber>
                    <step.Icon size={24} weight="duotone" />
                  </StepNumber>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDesc>{step.desc}</StepDesc>
                  </StepContent>
                </Step>
              );
            })}
          </Timeline>
        </ScrollAnimation>
      </Container>
    </Section>
  );
}
