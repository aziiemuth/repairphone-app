'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { Star, CaretLeft, CaretRight } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const fadeSlide = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const TestimonialWrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  position: relative;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 2.5rem;
  animation: ${fadeSlide} 0.4s ease both;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.75rem 1.5rem;
  }
`;

const StarsRow = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 1.25rem;

  svg {
    color: #FBBF24;
  }
`;

const TestText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  font-style: italic;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.95rem;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.125rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const AuthorRole = styled.div`
  font-size: 0.775rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 0.125rem;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.75rem;
`;

const NavBtn = styled.button`
  width: 42px;
  height: 42px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? '1.5rem' : '0.5rem')};
  height: 0.5rem;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.border)};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.35s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const testimonials = [
  {
    text: 'HP saya bootloop parah, udah pasrah mau beli baru. Ternyata di Athif Software Solutions bisa diperbaiki dalam hitungan jam! Harga juga terjangkau.',
    name: 'Budi Santoso',
    role: 'Pengusaha UMKM, Banyuwangi',
    rating: 5,
  },
  {
    text: 'Laptop blue screen terus, kerja jadi terhambat. Service di sini cepat banget, sekarang laptop udah normal lagi.',
    name: 'Sarah Putri',
    role: 'Content Creator, Banyuwangi',
    rating: 5,
  },
  {
    text: 'Pelayanan 24 jam beneran! Tengah malam HP error, langsung direspon dan di-flash. Layanan terbaik di Banyuwangi!',
    name: 'Ahmad Rizki',
    role: 'Mahasiswa, Banyuwangi',
    rating: 5,
  },
  {
    text: 'iPhone saya terkunci iCloud, langsung bisa diakses lagi. Teknisinya profesional dan terpercaya.',
    name: 'Maya Dewi',
    role: 'Marketing Manager, Banyuwangi',
    rating: 5,
  },
];

export default function Testimonials() {
  var [current, setCurrent] = useState(0);
  var [autoPlay, setAutoPlay] = useState(true);
  var [key, setKey] = useState(0);
  var timerRef = useRef(null);

  var goTo = useCallback(function(idx) {
    setCurrent(idx);
    setKey(function(k) { return k + 1; });
  }, []);

  var goPrev = useCallback(function() {
    setAutoPlay(false);
    goTo(current === 0 ? testimonials.length - 1 : current - 1);
  }, [current, goTo]);

  var goNext = useCallback(function() {
    setAutoPlay(false);
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  useEffect(function() {
    if (!autoPlay) return;
    timerRef.current = setInterval(function() {
      goTo(function(prev) { return (prev + 1) % testimonials.length; });
    }, 5000);
    return function() { clearInterval(timerRef.current); };
  }, [autoPlay, goTo]);

  var t = testimonials[current];

  return (
    <Section id="testimoni">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Apa Kata Mereka?"
            subtitle="Testimoni dari pelanggan yang sudah merasakan layanan kami."
          />
        </ScrollAnimation>

        <TestimonialWrapper>
          <ScrollAnimation animation="scaleIn">
            <Card key={key}>
              <StarsRow>
                {Array.from({ length: t.rating }).map(function(_, i) {
                  return <Star key={i} size={18} weight="fill" />;
                })}
              </StarsRow>

              <TestText>{'\u201C'}{t.text}{'\u201D'}</TestText>

              <Author>
                <Avatar>{t.name.charAt(0)}</Avatar>
                <AuthorInfo>
                  <AuthorName>{t.name}</AuthorName>
                  <AuthorRole>{t.role}</AuthorRole>
                </AuthorInfo>
              </Author>
            </Card>
          </ScrollAnimation>

          <Controls>
            <NavBtn onClick={goPrev} aria-label="Previous">
              <CaretLeft size={18} weight="bold" />
            </NavBtn>
            <Dots>
              {testimonials.map(function(_, idx) {
                return (
                  <Dot
                    key={idx}
                    $active={idx === current}
                    onClick={function() { setAutoPlay(false); goTo(idx); }}
                    aria-label={'Testimonial ' + (idx + 1)}
                  />
                );
              })}
            </Dots>
            <NavBtn onClick={goNext} aria-label="Next">
              <CaretRight size={18} weight="bold" />
            </NavBtn>
          </Controls>
        </TestimonialWrapper>
      </Container>
    </Section>
  );
}
