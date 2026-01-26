'use client';

import styled from 'styled-components';
import { ChatsCircle, MagnifyingGlass, Wrench, CheckCircle } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.background};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: ${({ theme }) => theme.colors.border};
    z-index: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 2rem;
  }
`;

const StepCard = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.colors.background};
`;

const IconCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  box-shadow: 0 10px 25px ${({ theme }) => theme.colors.shadow};
  transition: all ${({ theme }) => theme.transitions.normal};

  ${StepCard}:hover & {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: 0;
  right: calc(50% - 40px);
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.875rem;
  border: 2px solid ${({ theme }) => theme.colors.background};
`;

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StepDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const steps = [
  {
    icon: ChatsCircle,
    title: '1. Konsultasi',
    desc: 'Hubungi kami & jelaskan masalah device Anda untuk estimasi awal.',
  },
  {
    icon: MagnifyingGlass,
    title: '2. Diagnosa',
    desc: 'Kami cek lebih detail untuk mengetahui sumber masalah yang akurat.',
  },
  {
    icon: Wrench,
    title: '3. Perbaikan',
    desc: 'Proses pengerjaan dilakukan oleh teknisi ahli secara profesional.',
  },
  {
    icon: CheckCircle,
    title: '4. Selesai',
    desc: 'Device kembali normal, data aman, dan siap Anda gunakan lagi.',
  },
];

export default function Process() {
  return (
    <Section>
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Cara Kerja Kami"
            subtitle="Proses perbaikan yang transparan, cepat, dan mudah dipahami."
          />
        </ScrollAnimation>
        
        <StepsGrid>
          {steps.map((step, index) => (
            <ScrollAnimation key={index} animation="fadeInUp" delay={index * 0.1}>
              <StepCard>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <IconCircle>
                    <step.icon weight="duotone" />
                  </IconCircle>
                  <StepNumber>{index + 1}</StepNumber>
                </div>
                <StepTitle>{step.title}</StepTitle>
                <StepDesc>{step.desc}</StepDesc>
              </StepCard>
            </ScrollAnimation>
          ))}
        </StepsGrid>
      </Container>
    </Section>
  );
}
