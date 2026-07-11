'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Star, CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const fadeSlide = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: 7rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: -200px;
    left: -200px;
    width: 500px;
    height: 500px;
    background: ${({ theme }) => theme.colors.secondaryLight};
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
`;

const TestimonialWrapper = styled.div`
  max-width: 820px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: 16px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowMd};
  animation: ${fadeSlide} 0.5s ease both;
  key: ${({ $key }) => $key};

  /* subtle gradient bg */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 1.5rem;
  }
`;

const QuoteFloating = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: ${({ theme }) => theme.colors.border};
  opacity: 0.4;
`;

const StarsRow = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    color: #FBBF24;
  }
`;

const TestText = styled.p`
  font-size: 1.0625rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.85;
  font-style: italic;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.95rem;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 52px;
  height: 52px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
  flex-shrink: 0;
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
`;

const AuthorRole = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 0.125rem;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavBtn = styled.button`
  width: 46px;
  height: 46px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gradient};
    color: white;
    border-color: transparent;
    transform: scale(1.1);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? '2rem' : '0.5rem')};
  height: 0.5rem;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.border)};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.35s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    width: 1rem;
  }
`;

const testimonials = [
  {
    text: 'HP saya bootloop parah, udah pasrah mau beli baru. Ternyata di Athif Software Solutions Banyuwangi bisa diperbaiki dalam hitungan jam! Mantap banget, harga juga terjangkau.',
    name: 'Budi Santoso',
    role: 'Pengusaha UMKM, Banyuwangi',
    rating: 5,
  },
  {
    text: 'Laptop saya blue screen terus, kerja jadi terhambat. Service di Athif Software Solutions cepat banget, sekarang laptop udah normal lagi. Recommended banget buat warga Banyuwangi!',
    name: 'Sarah Putri',
    role: 'Content Creator, Banyuwangi',
    rating: 5,
  },
  {
    text: 'Pelayanan 24 jam beneran! Tengah malam HP error, langsung direspon dan di-flash. Layanan flashing HP terbaik di Banyuwangi!',
    name: 'Ahmad Rizki',
    role: 'Mahasiswa, Banyuwangi',
    rating: 5,
  },
  {
    text: 'iPhone saya terkunci iCloud, dibawa ke Athif Software Solutions langsung bisa diakses lagi. Teknisinya profesional, perbaikan software terlengkap di Banyuwangi.',
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
            subtitle="Testimoni nyata dari pelanggan yang sudah merasakan layanan Athif Software Solutions."
          />
        </ScrollAnimation>

        <TestimonialWrapper>
          <ScrollAnimation animation="scaleIn">
            <Card key={key}>
              <QuoteFloating>
                <Quotes size={80} weight="fill" />
              </QuoteFloating>

              <StarsRow>
                {Array.from({ length: t.rating }).map(function(_, i) {
                  return <Star key={i} size={20} weight="fill" />;
                })}
              </StarsRow>

              <TestText>&ldquo;{t.text}&rdquo;</TestText>

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
              <CaretLeft size={20} weight="bold" />
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
              <CaretRight size={20} weight="bold" />
            </NavBtn>
          </Controls>
        </TestimonialWrapper>
      </Container>
    </Section>
  );
}
