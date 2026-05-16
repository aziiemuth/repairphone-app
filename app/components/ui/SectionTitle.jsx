'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 1rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.primary}33;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.125rem;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.625rem;
  }
`;

const Underline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin-bottom: 1.125rem;

  .line {
    height: 3px;
    border-radius: 9999px;
    background: ${({ theme }) => theme.colors.border};
  }

  .accent {
    width: 48px;
    height: 4px;
    border-radius: 9999px;
    background: ${({ theme }) => theme.colors.gradient};
  }
`;

const Subtitle = styled.p`
  font-size: 1.0625rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.95rem;
  }
`;

export default function SectionTitle({ title, subtitle, pill }) {
  return (
    <Wrapper>
      {pill && <Pill>{pill}</Pill>}
      <Title>{title}</Title>
      <Underline>
        <div className="line" style={{ width: '32px' }} />
        <div className="accent" />
        <div className="line" style={{ width: '32px' }} />
      </Underline>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  );
}
