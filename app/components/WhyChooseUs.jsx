'use client';

import styled from 'styled-components';
import { Clock, ChatCircleDots, ShieldCheck, Users } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const List = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1rem;
    padding: 1.25rem 0;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  min-width: 44px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  ${Item}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.375rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const features = [
  {
    Icon: Clock,
    title: 'Layanan 24 Jam Nonstop',
    desc: 'Kapanpun butuh bantuan, kami siap melayani nonstop 24 jam setiap hari termasuk hari libur.',
  },
  {
    Icon: ChatCircleDots,
    title: 'Respon Cepat via WhatsApp',
    desc: 'Chat langsung dibalas. Tidak perlu nunggu lama untuk konsultasi dan estimasi biaya.',
  },
  {
    Icon: ShieldCheck,
    title: 'Aman dan Terpercaya',
    desc: 'Data kamu aman di tangan kami. Privasi customer adalah prioritas utama kami.',
  },
  {
    Icon: Users,
    title: 'Untuk Semua Kalangan',
    desc: 'Cocok untuk pengguna biasa maupun profesional yang butuh solusi software cepat.',
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="keunggulan">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Kenapa Pilih Kami?"
            subtitle="Jasa perbaikan software HP dan laptop terpercaya di Banyuwangi."
          />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <List>
            {features.map(function(feature) {
              return (
                <Item key={feature.title}>
                  <IconWrap>
                    <feature.Icon size={22} weight="duotone" />
                  </IconWrap>
                  <Content>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDesc>{feature.desc}</FeatureDesc>
                  </Content>
                </Item>
              );
            })}
          </List>
        </ScrollAnimation>
      </Container>
    </Section>
  );
}
