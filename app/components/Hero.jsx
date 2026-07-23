'use client';

import { useState, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import {
  WhatsappLogo,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react';
import Container from './ui/Container';
import TypeWriter from './ui/TypeWriter';

/* ===================== Keyframes ===================== */
const fadeInSlide = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(1.08); }
  to { transform: scale(1); }
`;

/* ===================== Slider ===================== */
const SliderSection = styled.section`
  position: relative;
  min-height: 100dvh;
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
  background: ${({ theme }) => theme.colors.gradientHero};
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
  width: ${({ $active }) => ($active ? '2rem' : '0.75rem')};
  height: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  padding: 18px 0;
  background-clip: content-box;
  background-color: ${({ $active }) => ($active ? 'white' : 'rgba(255,255,255,0.4)')};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
    width: 1.75rem;
  }
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $dir }) => ($dir === 'left' ? 'left: 1.5rem;' : 'right: 1.5rem;')}
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
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
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.08);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

/* ===================== Content ===================== */
const HeroContent = styled.div`
  position: relative;
  z-index: 5;
  padding-top: 6rem;
  padding-bottom: 5rem;
  max-width: 640px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 5rem;
    padding-bottom: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`;

const HeroInner = styled.div`
  animation: ${fadeInSlide} 0.8s ease forwards;
`;

const Title = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
`;

const GradientSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 480px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
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

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  svg { flex-shrink: 0; }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
  }
`;

const bgImages = [
  '/foto/background 1.webp',
  '/foto/background 2.webp',
  '/foto/background 3.webp',
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
    <SliderSection id="hero" aria-label="Beranda Utama">
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
      <SliderArrow $dir="left" onClick={goPrev} aria-label="Slide sebelumnya">
        <CaretLeft size={22} weight="bold" />
      </SliderArrow>
      <SliderArrow $dir="right" onClick={goNext} aria-label="Slide selanjutnya">
        <CaretRight size={22} weight="bold" />
      </SliderArrow>

      {/* Main Content */}
      <Container>
        <HeroContent>
          <HeroInner>
            <Title>
              Solusi <GradientSpan>Flashing HP</GradientSpan>
              {' & '}Perbaikan Software{' '}
              <TypeWriter />
            </Title>

            <Subtitle>
              Spesialis perbaikan software HP dan laptop di Banyuwangi.
              Layanan 24 jam, garansi 30 hari.
            </Subtitle>

            <WAButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi Kami via WhatsApp untuk konsultasi perbaikan software HP dan laptop"
            >
              <WhatsappLogo size={22} weight="fill" />
              Hubungi Kami
            </WAButton>
          </HeroInner>
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
              aria-label={'Pindah ke slide ' + (idx + 1)}
            />
          );
        })}
      </SliderDots>
    </SliderSection>
  );
}
