'use client';

import styled from 'styled-components';
import { MapPin, Clock, Phone, ArrowSquareOut } from '@phosphor-icons/react';
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MapCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};

  iframe {
    display: block;
    width: 100%;
    height: 380px;
    border: none;
  }
`;

const InfoStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoCard = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.colors.shadowMd};
  }
`;

const IconBox = styled.div`
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

  ${InfoCard}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

const InfoSub = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
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
            title="Lokasi Kami"
            subtitle="Temukan jasa perbaikan software terpercaya di Banyuwangi."
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
              <InfoCard>
                <IconBox>
                  <MapPin size={22} weight="duotone" />
                </IconBox>
                <InfoContent>
                  <InfoTitle>Athif Software Solutions</InfoTitle>
                  <InfoSub>Banyuwangi, Jawa Timur, Indonesia</InfoSub>
                  <InfoSub>Layanan juga tersedia secara remote/online.</InfoSub>
                  <ExternalLink
                    href="https://maps.google.com/?q=-8.201556,114.378694"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Buka lokasi Athif Software Solutions di Google Maps"
                  >
                    Buka di Maps <ArrowSquareOut size={12} />
                  </ExternalLink>
                </InfoContent>
              </InfoCard>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={0.1}>
              <InfoCard>
                <IconBox>
                  <Clock size={22} weight="duotone" />
                </IconBox>
                <InfoContent>
                  <InfoTitle>Senin sampai Minggu</InfoTitle>
                  <InfoSub>24 Jam Nonstop, termasuk hari libur nasional</InfoSub>
                </InfoContent>
              </InfoCard>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={0.2}>
              <InfoCard>
                <IconBox>
                  <Phone size={22} weight="duotone" />
                </IconBox>
                <InfoContent>
                  <InfoTitle>0816-234-185</InfoTitle>
                  <InfoSub>Respon cepat dalam hitungan menit</InfoSub>
                  <ExternalLink
                    href="https://wa.me/62816234185"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat WhatsApp dengan Athif Software Solutions"
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
