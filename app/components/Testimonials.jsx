'use client';

import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Star, CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const TestimonialWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 3rem;
  text-align: center;
  position: relative;
  box-shadow: 0 10px 40px ${({ theme }) => theme.colors.shadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 1.5rem;

  svg {
    color: #FBBF24;
    fill: #FBBF24;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
`;

const AuthorTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  background: ${({ theme, $active }) => 
    $active ? theme.colors.primary : theme.colors.border};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

var testimonials = [
  {
    text: 'HP saya bootloop parah, udah pasrah mau beli baru. Ternyata di Athif Software Solutions Banyuwangi bisa diperbaiki dalam hitungan jam! Mantap banget, harga juga terjangkau.',
    name: 'Budi Santoso',
    title: 'Pengusaha UMKM, Banyuwangi',
    rating: 5,
  },
  {
    text: 'Laptop saya blue screen terus, kerja jadi terhambat. Service di Athif Software Solutions cepat banget, sekarang laptop udah normal lagi. Recommended banget buat warga Banyuwangi!',
    name: 'Sarah Putri',
    title: 'Content Creator, Banyuwangi',
    rating: 5,
  },
  {
    text: 'Pelayanan 24 jam beneran! Tengah malam HP error, langsung direspon dan di-flash. Layanan flashing HP terbaik di Banyuwangi!',
    name: 'Ahmad Rizki',
    title: 'Mahasiswa, Banyuwangi',
    rating: 5,
  },
  {
    text: 'iPhone saya terkunci iCloud, dibawa ke Athif Software Solutions langsung bisa diakses lagi. Teknisinya profesional, perbaikan software terlengkap di Banyuwangi.',
    name: 'Maya Dewi',
    title: 'Marketing Manager, Banyuwangi',
    rating: 5,
  },
];

export default function Testimonials() {
  var [current, setCurrent] = useState(0);
  var [isAutoPlay, setIsAutoPlay] = useState(true);
  var intervalRef = useRef(null);

  useEffect(function() {
    if (isAutoPlay) {
      intervalRef.current = setInterval(function() {
        setCurrent(function(prev) {
          return (prev + 1) % testimonials.length;
        });
      }, 5000);
    }

    return function() {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlay]);

  function handlePrev() {
    setIsAutoPlay(false);
    setCurrent(function(prev) {
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  }

  function handleNext() {
    setIsAutoPlay(false);
    setCurrent(function(prev) {
      return (prev + 1) % testimonials.length;
    });
  }

  function handleDotClick(index) {
    setIsAutoPlay(false);
    setCurrent(index);
  }

  var testimonial = testimonials[current];

  return (
    <Section>
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Apa Kata Mereka?"
            subtitle="Testimoni dari pelanggan yang sudah merasakan layanan kami."
          />
        </ScrollAnimation>

        <TestimonialWrapper>
          <ScrollAnimation animation="scaleIn">
            <TestimonialCard>
              <QuoteIcon>
                <Quotes size={24} weight="fill" />
              </QuoteIcon>
              <Stars>
                {Array.from({ length: testimonial.rating }).map(function(_, i) {
                  return <Star key={i} size={20} weight="fill" />;
                })}
              </Stars>
              <TestimonialText>&ldquo;{testimonial.text}&rdquo;</TestimonialText>
              <Author>
                <Avatar>{testimonial.name.charAt(0)}</Avatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <AuthorTitle>{testimonial.title}</AuthorTitle>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          </ScrollAnimation>

          <NavButtons>
            <NavButton onClick={handlePrev} aria-label="Previous">
              <CaretLeft size={24} weight="bold" />
            </NavButton>
            <NavButton onClick={handleNext} aria-label="Next">
              <CaretRight size={24} weight="bold" />
            </NavButton>
          </NavButtons>

          <Dots>
            {testimonials.map(function(_, index) {
              return (
                <Dot
                  key={index}
                  $active={index === current}
                  onClick={function() { handleDotClick(index); }}
                  aria-label={'Go to testimonial ' + (index + 1)}
                />
              );
            })}
          </Dots>
        </TestimonialWrapper>
      </Container>
    </Section>
  );
}
