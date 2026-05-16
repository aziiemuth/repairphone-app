'use client';

import styled, { keyframes } from 'styled-components';
import {
  DeviceMobile,
  Laptop,
  DownloadSimple,
  LockKeyOpen,
  Lightning,
  GearSix,
  ArrowRight,
  WhatsappLogo,
} from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Section = styled.section`
  padding: 7rem 0 5rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
  group: true;

  /* Gradient accent on top */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ $gradient }) => $gradient};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  /* Glow bg on hover */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ $gradient }) => $gradient};
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px ${({ theme }) => theme.colors.shadowDark};
    border-color: transparent;

    &::before {
      transform: scaleX(1);
    }

    &::after {
      opacity: 0.04;
    }
  }
`;

const CardInner = styled.div`
  position: relative;
  z-index: 1;
`;

const IconBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${({ $gradient }) => $gradient};
  border-radius: 16px;
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 20px ${({ $shadow }) => $shadow};
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${Card}:hover & {
    transform: scale(1.1) rotate(-8deg);
    box-shadow: 0 12px 28px ${({ $shadow }) => $shadow};
  }
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`;

const Desc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 1.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ $color }) => $color};
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const NoteBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.25rem 2rem;
  background: ${({ theme }) => theme.isDark
    ? 'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(99,102,241,0.12) 100%)'
    : 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(99,102,241,0.08) 100%)'};
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  flex-wrap: wrap;
  gap: 0.75rem;

  .note-text {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};

    span {
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .note-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.25rem;
    background: ${({ theme }) => theme.colors.gradient};
    color: white;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  }
`;

const WHATSAPP_URL = 'https://wa.me/62816234185?text=' + encodeURIComponent('Halo, saya ingin konsultasi perbaikan software.');

const services = [
  {
    Icon: DeviceMobile,
    title: 'Perbaikan Software HP',
    desc: 'Spesialis perbaikan software HP di Banyuwangi. Android & iOS — bootloop, stuck logo, error system, semua bisa ditangani.',
    gradient: 'linear-gradient(135deg, #0EA5E9, #6366F1)',
    shadow: 'rgba(14,165,233,0.25)',
    color: '#0EA5E9',
  },
  {
    Icon: Laptop,
    title: 'Perbaikan Software Laptop',
    desc: 'Jasa perbaikan software laptop di Banyuwangi. Windows & Linux — blue screen, corrupted system, laptop lemot.',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    shadow: 'rgba(139,92,246,0.25)',
    color: '#8B5CF6',
  },
  {
    Icon: DownloadSimple,
    title: 'Install Ulang OS',
    desc: 'Layanan install ulang OS di Banyuwangi. Fresh install Windows, Linux, macOS, Android, atau iOS dengan driver lengkap.',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    shadow: 'rgba(16,185,129,0.25)',
    color: '#10B981',
  },
  {
    Icon: LockKeyOpen,
    title: 'Unlock & Bypass FRP',
    desc: 'Jasa unlock HP dan bypass FRP di Banyuwangi. Bypass Google, iCloud, pattern lock, dan berbagai proteksi software.',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    shadow: 'rgba(245,158,11,0.25)',
    color: '#F59E0B',
  },
  {
    Icon: Lightning,
    title: 'Flashing HP & Firmware',
    desc: 'Jasa flashing HP di Banyuwangi — update, downgrade, atau flash ulang firmware Android & iPhone untuk performa optimal.',
    gradient: 'linear-gradient(135deg, #EAB308, #F97316)',
    shadow: 'rgba(234,179,8,0.25)',
    color: '#EAB308',
  },
  {
    Icon: GearSix,
    title: 'Optimasi & Troubleshoot',
    desc: 'Device lemot atau error? Kami optimasi dan troubleshoot HP & laptop di Banyuwangi sampai device kembali normal.',
    gradient: 'linear-gradient(135deg, #06B6D4, #0EA5E9)',
    shadow: 'rgba(6,182,212,0.25)',
    color: '#06B6D4',
  },
];

export default function Services() {
  return (
    <Section id="layanan">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Layanan Perbaikan Software di Banyuwangi"
            subtitle="Athif Software Solutions — Spesialis flashing HP, perbaikan software handphone dan laptop. Fokus software only."
          />
        </ScrollAnimation>

        <Grid>
          {services.map(function(service, index) {
            return (
              <ScrollAnimation key={service.title} animation="fadeInUp" delay={index * 0.08}>
                <Card $gradient={service.gradient}>
                  <CardInner>
                    <IconBox $gradient={service.gradient} $shadow={service.shadow}>
                      <service.Icon size={28} weight="duotone" />
                    </IconBox>
                    <Title>{service.title}</Title>
                    <Desc>{service.desc}</Desc>
                    <CardLink href={WHATSAPP_URL} target="_blank" $color={service.color}>
                      Konsultasi Gratis
                      <ArrowRight size={14} weight="bold" />
                    </CardLink>
                  </CardInner>
                </Card>
              </ScrollAnimation>
            );
          })}
        </Grid>

        <ScrollAnimation animation="fadeInUp" delay={0.3}>
          <NoteBanner>
            <p className="note-text">
              ⚡ Semua layanan fokus pada <span>SOFTWARE ONLY</span> — Untuk kerusakan hardware kami tidak melayani.
            </p>
            <a className="note-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={16} weight="fill" />
              Tanya Sekarang
            </a>
          </NoteBanner>
        </ScrollAnimation>
      </Container>
    </Section>
  );
}
