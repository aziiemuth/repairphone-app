'use client';

import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { CaretDown, Question } from '@phosphor-icons/react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.section`
  padding: 7rem 0;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const FAQList = styled.div`
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ $open, theme }) => ($open ? theme.colors.primary : theme.colors.border)};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $open, theme }) =>
    $open ? `0 8px 32px ${theme.colors.shadow}` : 'none'};
`;

const QuestionBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 0.95rem;
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
    $open ? theme.colors.gradient : theme.colors.backgroundAlt};
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
  padding: 0 1.5rem 1.5rem 4.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.75;
`;

const faqs = [
  {
    question: 'Dimana lokasi Athif Software Solutions di Banyuwangi?',
    answer: 'Athif Software Solutions berlokasi di Banyuwangi, Jawa Timur. Kami melayani perbaikan software HP dan laptop untuk seluruh area Banyuwangi. Hubungi kami via WhatsApp untuk informasi lokasi detail.',
  },
  {
    question: 'Apakah melayani flashing HP di Banyuwangi?',
    answer: 'Ya! Kami adalah spesialis jasa flashing HP di Banyuwangi. Layanan meliputi update firmware, downgrade, flash ulang ROM, perbaikan bootloop, dan stuck logo untuk semua merek Android maupun iPhone.',
  },
  {
    question: 'Berapa biaya perbaikan software HP di Banyuwangi?',
    answer: 'Biaya tergantung jenis kerusakan. Kami melakukan diagnosa terlebih dahulu, lalu memberitahu estimasi biaya yang transparan. Tidak ada biaya tersembunyi. Hubungi WhatsApp untuk konsultasi gratis!',
  },
  {
    question: 'Apakah data saya aman?',
    answer: 'Ya, keamanan data adalah prioritas utama kami. Kami tidak mengakses file pribadi kecuali diperlukan untuk backup (dengan izin). Semua privasi pelanggan di Banyuwangi terjaga sepenuhnya.',
  },
  {
    question: 'Berapa lama proses perbaikan?',
    answer: 'Perbaikan software ringan seperti flashing HP bisa ditunggu (1-2 jam). Kasus berat seperti install ulang kompleks atau recovery data estimasi 1-2 hari kerja.',
  },
  {
    question: 'Apakah ada garansi servis?',
    answer: 'Tentu! Kami memberikan garansi servis software selama 30 hari. Jika masalah yang sama muncul kembali, kami perbaiki GRATIS. Kepuasan pelanggan adalah prioritas utama kami.',
  },
  {
    question: 'Bisa perbaikan panggilan ke rumah?',
    answer: 'Saat ini kami fokus pada layanan di workshop untuk hasil maksimal dengan peralatan lengkap. Namun kami menerima konsultasi via WhatsApp sebelum datang.',
  },
  {
    question: 'Software apa saja yang bisa diperbaiki?',
    answer: 'Kami menangani Windows, MacOS, Android, dan iOS. Mulai dari install ulang, flashing firmware, penghapusan virus, recovery data, bypass FRP, unlock, hingga optimasi performa device.',
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
            <CaretDown size={18} weight="bold" />
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
    <Section>
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <SectionTitle
            title="Pertanyaan Umum"
            subtitle="Hal yang sering ditanyakan oleh customer kami seputar layanan perbaikan software."
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
