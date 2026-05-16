'use client';

import { useState, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import {
  WhatsappLogo,
  ShieldCheck,
  Clock,
  Sparkle,
  ArrowRight,
  Play,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react';
import Container from './ui/Container';
import Button from './ui/Button';
import TypeWriter from './ui/TypeWriter';

/* ===================== Keyframes ===================== */
const fadeInSlide = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(1.12); }
  to { transform: scale(1); }
`;

const floatAnim = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const badgePulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(14, 165, 233, 0); }
`;

const scrollIndicator = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(8px); opacity: 0; }
`;

/* ===================== Slider ===================== */
const SliderSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const SlideTrack = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('${({ $bg }) => $bg}');
  background-size: cover;
  background-position: center;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${({ $active }) => ($active ? css`${scaleUp} 8s ease forwards` : 'none')};
`;

const SliderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) =>
    theme.isDark
      ? 'linear-gradient(135deg, rgba(7,11,20,0.92) 0%, rgba(12,26,58,0.85) 50%, rgba(7,11,20,0.88) 100%)'
      : 'linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(12,36,89,0.82) 50%, rgba(15,23,42,0.84) 100%)'};
  z-index: 1;
`;

const SliderDots = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.625rem;
  z-index: 10;
`;

const SliderDot = styled.button`
  width: ${({ $active }) => ($active ? '2rem' : '0.5rem')};
  height: 0.5rem;
  background: ${({ $active }) => ($active ? 'white' : 'rgba(255,255,255,0.4)')};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    width: 1.5rem;
  }
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $dir }) => ($dir === 'left' ? 'left: 1.5rem;' : 'right: 1.5rem;')}
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

/* ===================== Content ===================== */
const HeroContent = styled.div`
  position: relative;
  z-index: 5;
  padding-top: 7rem;
  padding-bottom: 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 6rem;
    padding-bottom: 5rem;
    gap: 3rem;
  }
`;

const HeroLeft = styled.div`
  animation: ${fadeInSlide} 0.8s ease forwards;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.125rem;
  background: rgba(14, 165, 233, 0.15);
  border: 1px solid rgba(14, 165, 233, 0.4);
  color: #7DD3FC;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.75rem;
  letter-spacing: 0.03em;
  animation: ${badgePulse} 3s ease-in-out infinite;
`;

const Title = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 800;
  color: white;
  line-height: 1.08;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
`;

const GradientSpan = styled.span`
  background: linear-gradient(135deg, #38BDF8 0%, #818CF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.75;
  margin-bottom: 2.25rem;
  max-width: 520px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const WAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 14px 32px rgba(37, 211, 102, 0.45);
  }

  svg { flex-shrink: 0; }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`;

const TrustBadges = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 500;

  svg { color: #34D399; flex-shrink: 0; }
`;

/* ===================== Right Visual ===================== */
const HeroRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: ${fadeInSlide} 0.8s 0.2s ease both;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const StatsCard = styled.div`
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);

  .stat-num {
    font-size: 1.75rem;
    font-weight: 800;
    color: white;
    letter-spacing: -0.03em;
    line-height: 1;
    background: linear-gradient(135deg, #38BDF8, #818CF8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    margin-top: 0.25rem;
  }
`;

const ServiceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

const ServiceTag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: default;
  animation: ${floatAnim} ${({ $delay }) => $delay || '3s'} ease-in-out infinite;

  &:hover {
    background: rgba(14, 165, 233, 0.2);
    border-color: rgba(14, 165, 233, 0.4);
    color: #7DD3FC;
  }
`;

const ScrollDown = styled.a`
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  z-index: 10;
  cursor: pointer;

  .scroll-line {
    width: 1px;
    height: 32px;
    background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.4));
    border-radius: 1px;
    animation: ${scrollIndicator} 1.4s ease-in-out infinite alternate;
  }
`;

const bgImages = [
  '/foto/background 1.png',
  '/foto/background 2.png',
  '/foto/background 3.png',
];

const serviceTags = [
  { label: '⚡ Flashing HP', delay: '3.2s' },
  { label: '🔓 Bypass FRP', delay: '3.8s' },
  { label: '💻 Install Ulang OS', delay: '4.2s' },
  { label: '🛡️ Unlock HP', delay: '3.5s' },
  { label: '🔧 Troubleshoot', delay: '4s' },
  { label: '📲 Software Repair', delay: '3.3s' },
];

const WHATSAPP_URL = 'https://wa.me/62816234185?text=' + encodeURIComponent('Halo, saya ingin konsultasi perbaikan software.');

export default function Hero() {
  var [currentSlide, setCurrentSlide] = useState(0);

  var goNext = useCallback(function() {
    setCurrentSlide(function(prev) { return (prev + 1) % bgImages.length; });
  }, []);

  var goPrev = useCallback(function() {
    setCurrentSlide(function(prev) { return prev === 0 ? bgImages.length - 1 : prev - 1; });
  }, []);

  useEffect(function() {
    var timer = setInterval(goNext, 6000);
    return function() { clearInterval(timer); };
  }, [goNext]);

  return (
    <SliderSection id="hero">
      {/* Background Slider */}
      <SlideTrack>
        {bgImages.map(function(img, idx) {
          return (
            <Slide key={img} $bg={img} $active={idx === currentSlide} />
          );
        })}
        <SliderOverlay />
      </SlideTrack>

      {/* Arrow Controls */}
      <SliderArrow $dir="left" onClick={goPrev} aria-label="Previous slide">
        <CaretLeft size={20} weight="bold" />
      </SliderArrow>
      <SliderArrow $dir="right" onClick={goNext} aria-label="Next slide">
        <CaretRight size={20} weight="bold" />
      </SliderArrow>

      {/* Main Content */}
      <Container>
        <HeroContent>
          <HeroLeft>
            <Badge>
              <Sparkle size={14} weight="duotone" />
              #1 Jasa Perbaikan Software di Banyuwangi
            </Badge>

            <Title>
              Solusi <GradientSpan>Flashing HP</GradientSpan>
              {' & '}Perbaikan
              <br />
              Software{' '}
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>
                <TypeWriter />
              </span>
            </Title>

            <Subtitle>
              Athif Software Solutions — Spesialis flashing HP, install ulang,
              unlock, bypass FRP & troubleshooting 24 jam nonstop. Langsung
              jadi, tanpa ribet!
            </Subtitle>

            <ButtonRow>
              <WAButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsappLogo size={22} weight="fill" />
                Chat WhatsApp Sekarang
              </WAButton>
              <SecondaryButton href="#layanan">
                <Play size={18} weight="fill" />
                Lihat Layanan
              </SecondaryButton>
            </ButtonRow>

            <TrustBadges>
              <TrustItem>
                <Clock size={17} weight="duotone" />
                Respon 24 Jam
              </TrustItem>
              <TrustItem>
                <ShieldCheck size={17} weight="duotone" />
                Data Aman Terjaga
              </TrustItem>
              <TrustItem>
                <Sparkle size={17} weight="duotone" />
                Garansi 30 Hari
              </TrustItem>
            </TrustBadges>
          </HeroLeft>

          <HeroRight>
            <StatsCard>
              {[
                { num: '500+', label: 'Pelanggan Puas' },
                { num: '1200+', label: 'Device Berhasil' },
                { num: '24/7', label: 'Layanan Aktif' },
                { num: '4.9★', label: 'Rating Google' },
              ].map(function(s) {
                return (
                  <StatItem key={s.label}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </StatItem>
                );
              })}
            </StatsCard>

            <ServiceTags>
              {serviceTags.map(function(tag) {
                return (
                  <ServiceTag key={tag.label} $delay={tag.delay}>
                    {tag.label}
                  </ServiceTag>
                );
              })}
            </ServiceTags>
          </HeroRight>
        </HeroContent>
      </Container>

      {/* Slide Dots */}
      <SliderDots>
        {bgImages.map(function(_, idx) {
          return (
            <SliderDot
              key={idx}
              $active={idx === currentSlide}
              onClick={function() { setCurrentSlide(idx); }}
              aria-label={'Slide ' + (idx + 1)}
            />
          );
        })}
      </SliderDots>

      <ScrollDown href="#layanan">
        <div className="scroll-line" />
        Scroll
      </ScrollDown>
    </SliderSection>
  );
}
