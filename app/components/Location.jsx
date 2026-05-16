'use client';

import styled, { keyframes } from 'styled-components';
import { MapPin, Clock, Phone, ArrowSquareOut } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 7rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MapCard = styled.div`
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 56px ${({ theme }) => theme.colors.shadowDark};
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;

  iframe {
    display: block;
    width: 100%;
    height: 420px;
    border: none;
  }

  /* Gradient frame on top */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #0EA5E9, #6366F1);
    z-index: 1;
  }
`;

const InfoStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoCard = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateX(6px);
    box-shadow: 0 12px 32px ${({ theme }) => theme.colors.shadowDark};
    border-color: ${({ $borderColor }) => $borderColor};
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  min-width: 52px;
  background: ${({ $gradient }) => $gradient};
  border-radius: 14px;
  color: white;
  box-shadow: 0 6px 16px ${({ $shadow }) => $shadow};
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${InfoCard}:hover & {
    transform: scale(1.1) rotate(-8deg);
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h4`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.25rem;
`;

const InfoTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

const InfoSub = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.625rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ $color }) => $color};
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
    transform: translateX(2px);
  }
`;

const MAP_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.0!2d114.378694!3d-8.201556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTInMDUuNiJTIDExNMKwMjInNDMuMyJF!5e0!3m2!1sen!2sid!4v1234567890`;

export default function Location() {
  return (
    <Section id="lokasi">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Lokasi Athif Software Solutions"
            subtitle="Temukan jasa flashing HP dan perbaikan software terpercaya di Banyuwangi."
          />
        </ScrollAnimation>

        <Grid>
          <ScrollAnimation animation="fadeInLeft">
            <MapCard>
              <iframe
                src={MAP_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Athif Software Solutions Banyuwangi"
              />
            </MapCard>
          </ScrollAnimation>

          <InfoStack>
            <ScrollAnimation animation="fadeInRight" delay={0}>
              <InfoCard $borderColor="#0EA5E9">
                <IconBox
                  $gradient="linear-gradient(135deg, #0EA5E9, #6366F1)"
                  $shadow="rgba(14,165,233,0.25)"
                >
                  <MapPin size={24} weight="duotone" />
                </IconBox>
                <InfoContent>
                  <InfoLabel>Alamat</InfoLabel>
                  <InfoTitle>Athif Software Solutions</InfoTitle>
                  <InfoSub>Banyuwangi, Jawa Timur, Indonesia</InfoSub>
                  <InfoSub>Layanan juga tersedia secara remote/online.</InfoSub>
                  <ExternalLink
                    href="https://maps.google.com/?q=-8.201556,114.378694"
                    target="_blank"
                    $color="#0EA5E9"
                  >
                    Buka di Maps <ArrowSquareOut size={12} />
                  </ExternalLink>
                </InfoContent>
              </InfoCard>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={0.1}>
              <InfoCard $borderColor="#10B981">
                <IconBox
                  $gradient="linear-gradient(135deg, #10B981, #06B6D4)"
                  $shadow="rgba(16,185,129,0.25)"
                >
                  <Clock size={24} weight="duotone" />
                </IconBox>
                <InfoContent>
                  <InfoLabel>Jam Operasional</InfoLabel>
                  <InfoTitle>Senin – Minggu</InfoTitle>
                  <InfoSub>
                    <strong>24 Jam Nonstop</strong> — Termasuk hari libur nasional
                  </InfoSub>
                </InfoContent>
              </InfoCard>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={0.2}>
              <InfoCard $borderColor="#8B5CF6">
                <IconBox
                  $gradient="linear-gradient(135deg, #8B5CF6, #EC4899)"
                  $shadow="rgba(139,92,246,0.25)"
                >
                  <Phone size={24} weight="duotone" />
                </IconBox>
                <InfoContent>
                  <InfoLabel>Kontak WhatsApp</InfoLabel>
                  <InfoTitle>0816-234-185</InfoTitle>
                  <InfoSub>Respon cepat dalam hitungan menit</InfoSub>
                  <ExternalLink
                    href="https://wa.me/62816234185"
                    target="_blank"
                    $color="#8B5CF6"
                  >
                    Chat Sekarang <ArrowSquareOut size={12} />
                  </ExternalLink>
                </InfoContent>
              </InfoCard>
            </ScrollAnimation>
          </InfoStack>
        </Grid>
      </Container>
    </Section>
  );
}
