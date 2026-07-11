'use client';

import styled, { keyframes } from 'styled-components';
import { Clock, ChatCircleDots, ShieldCheck, Users, ArrowRight } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 7rem 0;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;

  /* Decorative blob */
  &::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    background: ${({ theme }) => theme.colors.primaryLight};
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 1.75rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: 16px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: default;
  box-shadow: ${({ theme }) => theme.colors.shadowMd};

  &:hover {
    transform: translateY(-4px) translateX(2px);
    box-shadow: ${({ theme }) => theme.colors.shadowHover};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 1.25rem;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  min-width: 56px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 16px;
  color: white;
  box-shadow: 0 8px 20px ${({ $shadow }) => $shadow};
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${Card}:hover & {
    transform: scale(1.1) rotate(-8deg);
  }
`;

const Content = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 1.0625rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const FeatureDesc = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
`;

const features = [
  {
    Icon: Clock,
    title: 'Layanan 24 Jam Nonstop',
    desc: 'Kapanpun butuh bantuan, kami siap melayani nonstop 24 jam setiap hari termasuk hari libur.',
    gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    shadow: 'rgba(99,102,241,0.25)',
  },
  {
    Icon: ChatCircleDots,
    title: 'Respon Cepat via WA',
    desc: 'Chat via WhatsApp langsung dibalas. Tidak perlu nunggu lama untuk konsultasi dan estimasi biaya.',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    shadow: 'rgba(16,185,129,0.25)',
  },
  {
    Icon: ShieldCheck,
    title: 'Aman & Terpercaya',
    desc: 'Data kamu aman di tangan kami. Privasi customer adalah prioritas utama kami.',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    shadow: 'rgba(139,92,246,0.25)',
  },
  {
    Icon: Users,
    title: 'Untuk Semua Kalangan',
    desc: 'Cocok untuk pengguna biasa maupun profesional yang butuh solusi software cepat dan terpercaya.',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    shadow: 'rgba(245,158,11,0.25)',
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="keunggulan">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Kenapa Pilih Athif Software Solutions?"
            subtitle="Jasa perbaikan software HP dan laptop terpercaya di Banyuwangi dengan harga terjangkau dan layanan 24 jam."
          />
        </ScrollAnimation>
        <Grid>
          {features.map(function(feature, index) {
            return (
              <ScrollAnimation key={feature.title} animation="scaleIn" delay={index * 0.1}>
                <Card $gradient={feature.gradient}>
                  <CardInner>
                    <IconBox $gradient={feature.gradient} $shadow={feature.shadow}>
                      <feature.Icon size={26} weight="duotone" />
                    </IconBox>
                    <Content>
                      <FeatureTitle>{feature.title}</FeatureTitle>
                      <FeatureDesc>{feature.desc}</FeatureDesc>
                    </Content>
                  </CardInner>
                </Card>
              </ScrollAnimation>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
