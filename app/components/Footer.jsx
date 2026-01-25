'use client';

import styled from 'styled-components';
import { DeviceMobile, Heart, WhatsappLogo, InstagramLogo } from '@phosphor-icons/react';
import Container from './ui/Container';
import ScrollAnimation from './ui/ScrollAnimation';

const FooterSection = styled.footer`
  padding: 4rem 0 2rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterBrand = styled.div``;

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

const FooterColumn = styled.div``;

const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const FooterList = styled.ul`
  list-style: none;
`;

const FooterItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.text};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;

  svg {
    color: #ef4444;
  }
`;

export default function Footer() {
  var currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <FooterContent>
            <FooterBrand>
              <Logo>
                <DeviceMobile size={24} weight="duotone" />
                Software Fix
              </Logo>
              <FooterDesc>
                Layanan perbaikan software handphone dan laptop terpercaya.
                Spesialis install ulang, unlock, flash, optimasi, dan troubleshooting.
                Software only, bukan hardware!
              </FooterDesc>
              <SocialLinks>
                <SocialLink 
                  href="https://wa.me/62816234185" 
                  target="_blank"
                  aria-label="WhatsApp"
                >
                  <WhatsappLogo size={24} weight="fill" />
                </SocialLink>
                <SocialLink 
                  href="https://instagram.com/athiief" 
                  aria-label="Instagram"
                >
                  <InstagramLogo size={24} weight="fill" />
                </SocialLink>
              </SocialLinks>
            </FooterBrand>

            <FooterColumn>
              <FooterTitle>Layanan</FooterTitle>
              <FooterList>
                <FooterItem>Perbaikan Software HP</FooterItem>
                <FooterItem>Perbaikan Software Laptop</FooterItem>
                <FooterItem>Install Ulang OS</FooterItem>
                <FooterItem>Unlock & Bypass</FooterItem>
                <FooterItem>Flash Firmware</FooterItem>
              </FooterList>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Jam Operasional</FooterTitle>
              <FooterList>
                <FooterItem>Senin - Minggu</FooterItem>
                <FooterItem><strong>24 Jam Nonstop</strong></FooterItem>
                <FooterItem>Termasuk Hari Libur</FooterItem>
              </FooterList>
            </FooterColumn>
          </FooterContent>
        </ScrollAnimation>

        <FooterBottom>
          <Copyright>
            © {currentYear} Software Fix. Made with <Heart size={14} weight="fill" /> in Banyuwangi.
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
}
