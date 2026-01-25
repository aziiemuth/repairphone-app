'use client';

import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  overflow: hidden;
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  margin: 0 -1.5rem;
  padding: 1rem 0;
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: ${({ $direction }) => ($direction === 'left' ? scrollLeft : scrollRight)} 
    ${({ $duration }) => $duration || 30}s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 80px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadow};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const Spacer = styled.div`
  height: 1.5rem;
`;

// Images from public/foto folder
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

// Split into two rows
var firstRow = sponsorImages.slice(0, 6);
var secondRow = sponsorImages.slice(6, 12);

export default function Sponsors() {
  return (
    <Section>
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Dipercaya Oleh"
            subtitle="Berbagai brand dan perusahaan telah mempercayakan perbaikan software kepada kami."
          />
        </ScrollAnimation>
      </Container>
      
      {/* First row - scroll left */}
      <MarqueeWrapper>
        <MarqueeTrack $direction="left" $duration={25}>
          {/* Double the items for seamless loop */}
          {[...firstRow, ...firstRow].map(function(src, index) {
            return (
              <LogoItem key={'row1-' + index}>
                <Image
                  src={src}
                  alt={'Partner ' + (index + 1)}
                  width={100}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </LogoItem>
            );
          })}
        </MarqueeTrack>
      </MarqueeWrapper>

      <Spacer />

      {/* Second row - scroll right */}
      <MarqueeWrapper>
        <MarqueeTrack $direction="right" $duration={30}>
          {/* Double the items for seamless loop */}
          {[...secondRow, ...secondRow].map(function(src, index) {
            return (
              <LogoItem key={'row2-' + index}>
                <Image
                  src={src}
                  alt={'Partner ' + (index + 7)}
                  width={100}
                  height={60}
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
