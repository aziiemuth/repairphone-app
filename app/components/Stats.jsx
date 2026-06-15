'use client';

import styled, { keyframes } from 'styled-components';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, CheckCircle, Clock, Star } from '@phosphor-icons/react';
import Container from './ui/Container';

const floatUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0.3;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${floatUp} 0.6s ${({ $delay }) => $delay} ease both;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.shadowDark};
    border-color: ${({ theme }) => theme.colors.primary};

    &::before {
      opacity: 1;
    }
  }
`;

const IconRing = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 50%;
  color: white;
  margin-bottom: 1.25rem;
  box-shadow: 0 8px 24px ${({ $shadow }) => $shadow};
  transition: all 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.12) rotate(-5deg);
  }
`;

const Number = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1;
  letter-spacing: -0.04em;
`;

const Label = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`;

const stats = [
  {
    Icon: Users,
    number: 500,
    suffix: '+',
    label: 'Pelanggan Puas',
    gradient: 'linear-gradient(135deg, #0EA5E9, #6366F1)',
    shadow: 'rgba(14,165,233,0.3)',
    delay: '0s',
  },
  {
    Icon: CheckCircle,
    number: 1200,
    suffix: '+',
    label: 'Device Diperbaiki',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    shadow: 'rgba(16,185,129,0.3)',
    delay: '0.1s',
  },
  {
    Icon: Clock,
    number: 24,
    suffix: '/7',
    label: 'Layanan Nonstop',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    shadow: 'rgba(245,158,11,0.3)',
    delay: '0.2s',
  },
  {
    Icon: Star,
    number: 4.9,
    decimals: 1,
    suffix: '',
    label: 'Rating Pelanggan',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    shadow: 'rgba(139,92,246,0.3)',
    delay: '0.3s',
  },
];

export default function Stats() {
  var { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Section ref={ref}>
      <Container>
        <Grid>
          {stats.map(function(stat) {
            return (
              <Card
                key={stat.label}
                $delay={stat.delay}
                $gradient={stat.gradient}
              >
                <IconRing $gradient={stat.gradient} $shadow={stat.shadow}>
                  <stat.Icon size={30} weight="duotone" />
                </IconRing>
                <Number $gradient={stat.gradient}>
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
                </Number>
                <Label>{stat.label}</Label>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
