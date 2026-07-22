'use client';

import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Container from './ui/Container';
import ScrollAnimation from './ui/ScrollAnimation';

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Section = styled.section`
  padding: 3.5rem 0;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const Label = styled.p`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 1.5rem;
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  margin: 0 -1.5rem;
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 2.5rem;
  width: max-content;
  animation: ${scrollLeft} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 60px;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: all ${({ theme }) => theme.transitions.normal};
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

// All images in a single row
const sponsorImages = [
  '/foto/pngwing.com.png',
  '/foto/pngwing.com (1).png',
  '/foto/pngwing.com (2).png',
  '/foto/pngwing.com (3).png',
  '/foto/pngwing.com (4).png',
  '/foto/pngwing.com (5).png',
  '/foto/pngwing.com (6).png',
  '/foto/pngwing.com (7).png',
  '/foto/pngwing.com (8).png',
  '/foto/pngwing.com (9).png',
  '/foto/pngwing.com (10).png',
  '/foto/pngwing.com (11).png',
];

export default function Sponsors() {
  return (
    <Section>
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <Label>Dipercaya oleh berbagai brand</Label>
        </ScrollAnimation>
      </Container>

      <MarqueeWrapper>
        <MarqueeTrack>
          {/* Double for seamless loop */}
          {[...sponsorImages, ...sponsorImages].map(function(src, index) {
            return (
              <LogoItem key={'logo-' + index}>
                <Image
                  src={src}
                  alt={'Partner ' + ((index % sponsorImages.length) + 1)}
                  width={90}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </LogoItem>
            );
          })}
        </MarqueeTrack>
      </MarqueeWrapper>
    </Section>
  );
}
