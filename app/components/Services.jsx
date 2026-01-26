'use client';

import styled from 'styled-components';
import { 
  DeviceMobile, 
  Laptop, 
  DownloadSimple, 
  LockKeyOpen, 
  Lightning, 
  GearSix 
} from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 0;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2rem;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.shadow};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: white;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
`;

const ServiceDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const Note = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

var services = [
  {
    Icon: DeviceMobile,
    title: 'Perbaikan Software HP',
    desc: 'Spesialis Android & iOS. Bootloop, stuck logo, error system, semua bisa ditangani dengan cepat.',
  },
  {
    Icon: Laptop,
    title: 'Perbaikan Software Laptop',
    desc: 'Windows & Linux. Blue screen, corrupted system, laptop lemot, kami siap bantu.',
  },
  {
    Icon: DownloadSimple,
    title: 'Install Ulang OS',
    desc: 'Instalasi fresh Windows, Linux, macOS, Android, atau iOS dengan driver lengkap.',
  },
  {
    Icon: LockKeyOpen,
    title: 'Unlock & Bypass',
    desc: 'Bypass FRP Google, iCloud, pattern lock, dan berbagai proteksi software lainnya.',
  },
  {
    Icon: Lightning,
    title: 'Flash & Firmware',
    desc: 'Update, downgrade, atau flash ulang firmware untuk performa optimal device.',
  },
  {
    Icon: GearSix,
    title: 'Optimasi & Troubleshoot',
    desc: 'Device lemot atau error? Kami optimasi dan troubleshoot sampai device kembali normal.',
  },
];

export default function Services() {
  return (
    <Section id="layanan">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Layanan Kami"
            subtitle="Spesialis perbaikan software handphone dan laptop. Fokus software only, bukan hardware."
          />
        </ScrollAnimation>
        <ServicesGrid>
          {services.map(function(service, index) {
            return (
              <ScrollAnimation key={service.title} animation="fadeInUp" delay={index * 0.1}>
                <ServiceCard>
                  <IconWrapper>
                    <service.Icon size={32} weight="duotone" />
                  </IconWrapper>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDesc>{service.desc}</ServiceDesc>
                </ServiceCard>
              </ScrollAnimation>
            );
          })}
        </ServicesGrid>
        <ScrollAnimation animation="fadeInUp" delay={0.3}>
          <Note>
            ⚡ Semua layanan fokus pada <span>SOFTWARE ONLY</span>. Untuk kerusakan hardware, kami tidak melayani.
          </Note>
        </ScrollAnimation>
      </Container>
    </Section>
  );
}
