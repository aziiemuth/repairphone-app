'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { CaretDown } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0;
  }
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const QuestionContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-align: left;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ${({ theme }) => theme.transitions.normal};
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  color: ${({ theme }) => theme.colors.primary};
`;

const Answer = styled.div`
  padding: 0 1.25rem;
  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  
  p {
    padding-bottom: 1.25rem;
  }
`;

const faqs = [
  {
    question: "Apakah data saya aman?",
    answer: "Ya, keamanan data adalah prioritas kami. Kami tidak akan mengakses file pribadi Anda, kecuali diperlukan untuk backup data (dengan izin Anda). Semua privasi terjaga."
  },
  {
    question: "Berapa lama proses perbaikan?",
    answer: "Untuk perbaikan software ringan bisa ditunggu (1-2 jam). Untuk kasus berat atau butuh install ulang kompleks, estimasi 1-2 hari kerja."
  },
  {
    question: "Apakah ada garansi?",
    answer: "Tentu! Kami memberikan garansi servis software selama 30 hari. Jika masalah yang sama muncul kembali, kami perbaiki GRATIS."
  },
  {
    question: "Bisa perbaikan panggilan ke rumah?",
    answer: "Saat ini kami fokus pada layanan di workshop untuk hasil maksimal dengan peralatan lengkap. Namun, kami menerima konsultasi via WhatsApp dulu."
  },
  {
    question: "Harganya berapa?",
    answer: "Biaya tergantung jenis kerusakan. Kami akan melakukan diagnosa dulu, lalu memberitahu estimasi biaya. Tidak ada biaya tersembunyi."
  },
  {
    question: "Software apa saja yang bisa?",
    answer: "Kami menangani Windows, MacOS, Android, dan iOS. Mulai dari install ulang, penghapusan virus, recovery data, hingga setting jaringan."
  }
];

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuestionContainer>
      <QuestionButton onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {item.question}
        <Icon $isOpen={isOpen}>
          <CaretDown size={20} weight="bold" />
        </Icon>
      </QuestionButton>
      <Answer $isOpen={isOpen}>
        <p>{item.answer}</p>
      </Answer>
    </QuestionContainer>
  );
}

export default function FAQ() {
  return (
    <Section>
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Pertanyaan Umum"
            subtitle="Hal yang sering ditanyakan oleh customer kami."
          />
        </ScrollAnimation>
        
        <FAQGrid>
          {faqs.map((item, index) => (
            <ScrollAnimation key={index} animation="fadeInUp" delay={index * 0.05}>
              <FAQItem item={item} />
            </ScrollAnimation>
          ))}
        </FAQGrid>
      </Container>
    </Section>
  );
}
