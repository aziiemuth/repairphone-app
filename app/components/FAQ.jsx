'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { CaretDown, Question } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const FAQList = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const Item = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ $open, theme }) => ($open ? theme.colors.primary : theme.colors.border)};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const QuestionBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 1.125rem 1.25rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 0.9rem;
  text-align: left;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const QIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: ${({ $open, theme }) =>
    $open ? theme.colors.primary : theme.colors.primaryLight};
  border-radius: 8px;
  color: ${({ $open, theme }) => ($open ? 'white' : theme.colors.primary)};
  transition: all 0.3s ease;
`;

const QText = styled.span`
  flex: 1;
`;

const Chevron = styled.span`
  display: flex;
  align-items: center;
  color: ${({ $open, theme }) => ($open ? theme.colors.primary : theme.colors.textMuted)};
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
`;

const Answer = styled.div`
  max-height: ${({ $open }) => ($open ? '240px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
`;

const AnswerInner = styled.p`
  padding: 0 1.25rem 1.25rem 4rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  line-height: 1.7;
`;

const faqs = [
  {
    question: 'Dimana lokasi Athif Software Solutions?',
    answer: 'Kami berlokasi di Banyuwangi, Jawa Timur. Melayani perbaikan software HP dan laptop untuk seluruh area Banyuwangi. Hubungi WhatsApp untuk informasi lokasi detail.',
  },
  {
    question: 'Apakah melayani flashing HP?',
    answer: 'Ya! Kami spesialis jasa flashing HP di Banyuwangi. Layanan meliputi update firmware, downgrade, flash ulang ROM, perbaikan bootloop, dan stuck logo untuk semua merek.',
  },
  {
    question: 'Berapa biaya perbaikan software?',
    answer: 'Biaya tergantung jenis kerusakan. Kami diagnosa terlebih dahulu, lalu memberitahu estimasi biaya yang transparan. Tidak ada biaya tersembunyi.',
  },
  {
    question: 'Apakah data saya aman?',
    answer: 'Ya, keamanan data adalah prioritas utama kami. Kami tidak mengakses file pribadi kecuali diperlukan untuk backup (dengan izin).',
  },
  {
    question: 'Berapa lama proses perbaikan?',
    answer: 'Perbaikan ringan seperti flashing bisa ditunggu (1-2 jam). Kasus berat seperti install ulang kompleks estimasi 1-2 hari kerja.',
  },
  {
    question: 'Apakah ada garansi servis?',
    answer: 'Tentu! Garansi servis software selama 30 hari. Jika masalah yang sama muncul kembali, kami perbaiki gratis.',
  },
  {
    question: 'Bisa perbaikan panggilan ke rumah?',
    answer: 'Saat ini kami fokus layanan di workshop untuk hasil maksimal. Namun kami menerima konsultasi via WhatsApp sebelum datang.',
  },
  {
    question: 'Software apa saja yang bisa diperbaiki?',
    answer: 'Kami menangani Windows, macOS, Android, dan iOS. Mulai dari install ulang, flashing firmware, recovery data, bypass FRP, unlock, hingga optimasi performa.',
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollAnimation animation="fadeInUp" delay={index * 0.04}>
      <Item $open={open}>
        <QuestionBtn onClick={function() { setOpen(!open); }} aria-expanded={open}>
          <QIcon $open={open}>
            <Question size={16} weight="bold" />
          </QIcon>
          <QText>{item.question}</QText>
          <Chevron $open={open}>
            <CaretDown size={16} weight="bold" />
          </Chevron>
        </QuestionBtn>
        <Answer $open={open}>
          <AnswerInner>{item.answer}</AnswerInner>
        </Answer>
      </Item>
    </ScrollAnimation>
  );
}

export default function FAQ() {
  return (
    <Section id="faq">
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Pertanyaan Umum"
            subtitle="Hal yang sering ditanyakan seputar layanan perbaikan software."
          />
        </ScrollAnimation>

        <FAQList>
          {faqs.map(function(item, index) {
            return <FAQItem key={index} item={item} index={index} />;
          })}
        </FAQList>
      </Container>
    </Section>
  );
}
