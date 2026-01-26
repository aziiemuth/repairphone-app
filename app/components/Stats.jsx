'use client';

import styled from 'styled-components';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, CheckCircle, Clock, Star } from '@phosphor-icons/react';
import Container from './ui/Container';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.gradient};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem 1rem;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: white;
  margin-bottom: 1rem;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: white;
  margin-bottom: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: rgba(255, 255, 255, 0.9);
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

var stats = [
  {
    icon: Users,
    number: 500,
    suffix: '+',
    label: 'Pelanggan Puas',
  },
  {
    icon: CheckCircle,
    number: 1200,
    suffix: '+',
    label: 'Device Diperbaiki',
  },
  {
    icon: Clock,
    number: 24,
    suffix: '/7',
    label: 'Layanan Nonstop',
  },
  {
    icon: Star,
    number: 4.9,
    decimals: 1,
    suffix: '',
    label: 'Rating Pelanggan',
  },
];

export default function Stats() {
  var { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Section ref={ref}>
      <Container>
        <StatsGrid>
          {stats.map(function(stat, index) {
            return (
              <ScrollAnimation key={stat.label} animation="scaleIn" delay={index * 0.1}>
                <StatCard>
                  <IconWrapper>
                    <stat.icon size={32} weight="duotone" />
                  </IconWrapper>
                  <StatNumber>
                    {inView ? (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        decimals={stat.decimals || 0}
                        suffix={stat.suffix}
                      />
                    ) : (
                      '0' + stat.suffix
                    )}
                  </StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              </ScrollAnimation>
            );
          })}
        </StatsGrid>
      </Container>
    </Section>
  );
}
