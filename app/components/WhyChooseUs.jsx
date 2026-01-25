'use client';

import styled from 'styled-components';
import { Clock, ChatCircleDots, ShieldCheck, Users } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
`;

const FeaturesGrid = styled.div`
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

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px ${({ theme }) => theme.colors.shadow};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const IconCircle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: white;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

var features = [
  {
    Icon: Clock,
    title: 'Layanan 24 Jam',
    desc: 'Kapanpun butuh bantuan, kami siap melayani nonstop 24 jam setiap hari.',
  },
  {
    Icon: ChatCircleDots,
    title: 'Respon Cepat',
    desc: 'Chat via WhatsApp langsung dibalas. Gak perlu nunggu lama untuk konsultasi.',
  },
  {
    Icon: ShieldCheck,
    title: 'Aman & Terpercaya',
    desc: 'Data kamu aman di tangan kami. Privasi customer adalah prioritas utama.',
  },
  {
    Icon: Users,
    title: 'Untuk Semua Kalangan',
    desc: 'Cocok untuk pengguna biasa maupun profesional yang butuh solusi cepat.',
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="keunggulan">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Kenapa Pilih Kami?"
            subtitle="Kami hadir untuk memberikan layanan perbaikan software terbaik dengan harga terjangkau."
          />
        </ScrollAnimation>
        <FeaturesGrid>
          {features.map(function(feature, index) {
            return (
              <ScrollAnimation key={feature.title} animation="scaleIn" delay={index * 0.1}>
                <FeatureCard>
                  <IconCircle>
                    <feature.Icon size={32} weight="duotone" />
                  </IconCircle>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDesc>{feature.desc}</FeatureDesc>
                </FeatureCard>
              </ScrollAnimation>
            );
          })}
        </FeaturesGrid>
      </Container>
    </Section>
  );
}
