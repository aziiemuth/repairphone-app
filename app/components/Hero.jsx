'use client';

import styled from 'styled-components';
import { 
  WhatsappLogo,
  ShieldCheck, 
  Clock, 
  Sparkle, 
  DeviceMobile, 
  Laptop, 
  Wrench, 
  Lightning, 
  ShieldCheckered, 
  GearSix 
} from '@phosphor-icons/react';
import Container from './ui/Container';
import Button from './ui/Button';
import TypeWriter from './ui/TypeWriter';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 100px;
  padding-bottom: 2rem;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0.08;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div``;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.1;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const Features = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  svg {
    color: ${({ theme }) => theme.colors.success};
  }
`;

const HeroVisual = styled.div`
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const VisualCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2.5rem;
  box-shadow: 0 20px 50px ${({ theme }) => theme.colors.shadow};
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: white;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

var WHATSAPP_NUMBER = '620816234185';
var WHATSAPP_MESSAGE = 'Halo, saya ingin konsultasi perbaikan software.';
var WHATSAPP_URL = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE);

var visualIcons = [
  { Icon: DeviceMobile, label: 'Smartphone', color: '#0EA5E9' },
  { Icon: Laptop, label: 'Laptop', color: '#8B5CF6' },
  { Icon: Wrench, label: 'Repair', color: '#F97316' },
  { Icon: Lightning, label: 'Fast', color: '#EAB308' },
  { Icon: ShieldCheckered, label: 'Secure', color: '#10B981' },
  { Icon: GearSix, label: 'Settings', color: '#EC4899' },
];

export default function Hero() {
  return (
    <HeroSection id="hero">
      <Container>
        <HeroContent>
          <HeroText>
            <Badge>
              <Sparkle size={16} weight="duotone" />
              Layanan 24 Jam Non-Stop
            </Badge>
            <Title>
              Solusi Perbaikan <GradientText>Software</GradientText>
              <br />
              <TypeWriter /> Terpercaya
            </Title>
            <Subtitle>
              Spesialis perbaikan software handphone dan laptop. Install ulang, 
              unlock, flash, optimasi, dan troubleshooting. Tanpa ribet, langsung jadi!
            </Subtitle>
            <ButtonGroup>
              <Button 
                as="a" 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                variant="whatsapp" 
                size="lg"
              >
                <WhatsappLogo size={22} weight="fill" />
                Chat WhatsApp Sekarang
              </Button>
              <Button variant="secondary" size="lg" as="a" href="#layanan">
                Lihat Layanan
              </Button>
            </ButtonGroup>
            <Features>
              <Feature>
                <Clock size={20} weight="duotone" />
                Respon Cepat
              </Feature>
              <Feature>
                <ShieldCheck size={20} weight="duotone" />
                Aman & Terpercaya
              </Feature>
              <Feature>
                <Sparkle size={20} weight="duotone" />
                Garansi Layanan
              </Feature>
            </Features>
          </HeroText>

          <HeroVisual>
            <VisualCard>
              <IconGrid>
                {visualIcons.map(function(item) {
                  return (
                    <IconBox key={item.label} $bgColor={item.color} title={item.label}>
                      <item.Icon size={36} weight="duotone" />
                    </IconBox>
                  );
                })}
              </IconGrid>
            </VisualCard>
          </HeroVisual>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}
