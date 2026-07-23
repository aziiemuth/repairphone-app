'use client';

import styled from 'styled-components';
import {
  DeviceMobile,
  Laptop,
  DownloadSimple,
  LockKeyOpen,
  Lightning,
  GearSix,
  ArrowRight,
} from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 6rem 0 5rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0 3rem;
  }
`;

/* Bento grid: 2 featured items spanning full width, 4 smaller items below */
const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.25rem;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-decoration: none;
  min-height: 180px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.colors.shadowHover};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0) scale(0.99);
  }

  /* Featured cards span full row */
  &.featured {
    min-height: 220px;
    padding: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: auto;
    padding: 1.5rem;

    &.featured {
      min-height: auto;
      padding: 1.5rem;
    }
  }
`;

const IconBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.25rem;
  transition: all 0.3s ease;

  ${Card}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const CardDesc = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
  flex: 1;
`;

const CardArrow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
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

  ${Card}:hover & svg {
    transform: translateX(3px);
  }
`;

const NoteBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.primary}33;
  border-radius: 12px;
  flex-wrap: wrap;

  .note-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const WHATSAPP_URL = 'https://wa.me/62816234185?text=' + encodeURIComponent('Halo, saya ingin konsultasi perbaikan software.');

const services = [
  {
    Icon: DeviceMobile,
    title: 'Perbaikan Software HP',
    desc: 'Spesialis perbaikan software HP di Banyuwangi. Android & iOS, bootloop, stuck logo, error system.',
    featured: true,
  },
  {
    Icon: Laptop,
    title: 'Perbaikan Software Laptop',
    desc: 'Jasa perbaikan software laptop di Banyuwangi. Windows & Linux, blue screen, corrupted system.',
    featured: true,
  },
  {
    Icon: DownloadSimple,
    title: 'Install Ulang OS',
    desc: 'Fresh install Windows, Linux, macOS, Android, atau iOS dengan driver lengkap.',
  },
  {
    Icon: LockKeyOpen,
    title: 'Unlock & Bypass FRP',
    desc: 'Bypass Google, iCloud, pattern lock, dan berbagai proteksi software.',
  },
  {
    Icon: Lightning,
    title: 'Flashing HP & Firmware',
    desc: 'Update, downgrade, atau flash ulang firmware untuk performa optimal.',
  },
  {
    Icon: GearSix,
    title: 'Optimasi & Troubleshoot',
    desc: 'Optimasi dan troubleshoot HP & laptop sampai device kembali normal.',
  },
];

export default function Services() {
  return (
    <Section id="layanan">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Layanan Perbaikan Software"
            subtitle="Spesialis flashing HP, perbaikan software handphone dan laptop. Fokus software only."
          />
        </ScrollAnimation>

        <BentoGrid>
          {services.map(function(service, index) {
            return (
              <ScrollAnimation key={service.title} animation="fadeInUp" delay={index * 0.06}>
                <Card
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={'Konsultasi gratis ' + service.title + ' via WhatsApp'}
                  className={service.featured ? 'featured' : ''}
                >
                  <div>
                    <IconBox>
                      <service.Icon size={24} weight="duotone" />
                    </IconBox>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDesc>{service.desc}</CardDesc>
                  </div>
                  <CardArrow>
                    Konsultasi
                    <ArrowRight size={14} weight="bold" />
                  </CardArrow>
                </Card>
              </ScrollAnimation>
            );
          })}
        </BentoGrid>

        <ScrollAnimation animation="fadeInUp" delay={0.3}>
          <NoteBanner>
            <p className="note-text">
              Semua layanan fokus pada SOFTWARE ONLY. Untuk kerusakan hardware kami tidak melayani.
            </p>
          </NoteBanner>
        </ScrollAnimation>
      </Container>
    </Section>
  );
}
