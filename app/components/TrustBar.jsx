'use client';

import styled from 'styled-components';
import { ShieldCheck, Wrench, SealCheck } from '@phosphor-icons/react';
import Container from './ui/Container';

const Bar = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 1rem;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.2;
  }
`;

export default function TrustBar() {
  return (
    <Bar>
      <Container>
        <Grid>
          <Item>
            <IconWrapper>
              <ShieldCheck size={32} weight="duotone" />
            </IconWrapper>
            <Text>Data & Privasi Aman</Text>
          </Item>
          <Item>
            <IconWrapper>
              <Wrench size={32} weight="duotone" />
            </IconWrapper>
            <Text>Teknisi Berpengalaman</Text>
          </Item>
          <Item>
            <IconWrapper>
              <SealCheck size={32} weight="duotone" />
            </IconWrapper>
            <Text>Garansi Servis</Text>
          </Item>
        </Grid>
      </Container>
    </Bar>
  );
}
