'use client';

import styled from 'styled-components';
import { MapPin, Clock, Phone } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const MapWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: 0 20px 40px ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};

  iframe {
    display: block;
    width: 100%;
    height: 400px;
    border: none;
  }
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};

  &:hover {
    transform: translateX(5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 10px 20px ${({ theme }) => theme.colors.shadowHover};
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: white;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const COORDINATES = '-8.201556,114.378694';
const MAP_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.0!2d114.378694!3d-8.201556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTInMDUuNiJTIDExNMKwMjInNDMuMyJF!5e0!3m2!1sen!2sid!4v1234567890`;

export default function Location() {
  return (
    <Section id="lokasi">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Lokasi Kami"
            subtitle="Temukan kami dengan mudah melalui Google Maps."
          />
        </ScrollAnimation>
        <LocationGrid>
          <ScrollAnimation animation="fadeInLeft">
            <MapWrapper>
              <iframe
                src={MAP_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SoftwareFix"
              />
            </MapWrapper>
          </ScrollAnimation>
          <InfoCard>
            <ScrollAnimation animation="fadeInRight" delay={0}>
              <InfoItem>
                <IconBox>
                  <MapPin size={32} weight="duotone" />
                </IconBox>
                <InfoContent>
                  <InfoTitle>Alamat</InfoTitle>
                  <InfoText>
                    Koordinat: <strong>{COORDINATES}</strong>
                    <br />
                    Layanan juga tersedia secara remote/online.
                  </InfoText>
                </InfoContent>
              </InfoItem>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInRight" delay={0.1}>
              <InfoItem>
                <IconBox>
                  <Clock size={32} weight="duotone" />
                </IconBox>
                <InfoContent>
                  <InfoTitle>Jam Operasional</InfoTitle>
                  <InfoText>
                    Senin - Minggu: <strong>24 Jam</strong>
                    <br />
                    Termasuk hari libur nasional
                  </InfoText>
                </InfoContent>
              </InfoItem>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInRight" delay={0.2}>
              <InfoItem>
                <IconBox>
                  <Phone size={32} weight="duotone" />
                </IconBox>
                <InfoContent>
                  <InfoTitle>Kontak</InfoTitle>
                  <InfoText>
                    WhatsApp: <strong>0816-234-185</strong>
                    <br />
                    Respon cepat dalam hitungan menit
                  </InfoText>
                </InfoContent>
              </InfoItem>
            </ScrollAnimation>
          </InfoCard>
        </LocationGrid>
      </Container>
    </Section>
  );
}
