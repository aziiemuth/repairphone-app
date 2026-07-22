'use client';

import styled from 'styled-components';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Container from './ui/Container';

const Section = styled.section`
  padding: 3rem 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;

const Stat = styled.div`
  flex: 1;
  text-align: center;
  padding: 1rem 1.5rem;
  position: relative;

  /* Divider between stats */
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 40px;
    background: ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem 0.75rem;

    &:nth-child(2)::after {
      display: none;
    }

    &:nth-child(odd):not(:last-child)::after {
      display: block;
    }

    &:nth-child(even)::after {
      display: none;
    }
  }
`;

const Number = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;
  line-height: 1;
  letter-spacing: -0.04em;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.625rem;
  }
`;

const Label = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.3;
`;

const stats = [
  { number: 500, suffix: '+', label: 'Pelanggan Puas' },
  { number: 1200, suffix: '+', label: 'Device Diperbaiki' },
  { number: 24, suffix: '/7', label: 'Layanan Nonstop' },
  { number: 4.9, decimals: 1, suffix: '', label: 'Rating Google' },
];

export default function Stats() {
  var { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Section ref={ref}>
      <Container>
        <Row>
          {stats.map(function(stat) {
            return (
              <Stat key={stat.label}>
                <Number>
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
              </Stat>
            );
          })}
        </Row>
      </Container>
    </Section>
  );
}
