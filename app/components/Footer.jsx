'use client';

import styled, { keyframes } from 'styled-components';
import {
  DeviceMobile,
  Heart,
  WhatsappLogo,
  InstagramLogo,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
} from '@phosphor-icons/react';
import Container from './ui/Container';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.footer`
  background: ${({ theme }) =>
    theme.isDark ? '#040810' : '#0F172A'};
  padding: 5rem 0 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const Brand = styled.div``;

const LogoRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.25rem;

  .logo-icon {
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .logo-name {
    font-size: 1.125rem;
    font-weight: 700;
    color: white;
    letter-spacing: -0.02em;
  }

  .logo-tag {
    font-size: 0.65rem;
    color: rgba(255,255,255,0.5);
    display: block;
    letter-spacing: 0.04em;
  }
`;

const BrandDesc = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.75;
  max-width: 280px;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const SocialBtn = styled.a`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gradient};
    border-color: transparent;
    color: white;
    transform: translateY(-2px);
  }
`;

const Column = styled.div``;

const ColTitle = styled.h4`
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const LinkItem = styled.li``;

const FooterLink = styled.a`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.55);
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: all 0.2s ease;

  &:hover {
    color: white;
    padding-left: 4px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  margin-bottom: 0.75rem;

  svg {
    color: ${({ $color }) => $color};
    margin-top: 2px;
    flex-shrink: 0;
  }

  span {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.5;

    strong {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 600;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  margin-top: 3.5rem;
`;

const Bottom = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;

  svg { color: #ef4444; }
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.35);
    transition: color 0.2s ease;

    &:hover { color: rgba(255, 255, 255, 0.7); }
  }
`;

export default function Footer() {
  var currentYear = new Date().getFullYear();

  return (
    <Section>
      <Container>
        <ScrollAnimation animation="fadeInUp">
          <Grid>
            <Brand>
              <LogoRow>
                <div className="logo-icon">
                  <DeviceMobile size={22} weight="duotone" />
                </div>
                <div>
                  <span className="logo-name">Athif Software</span>
                  <span className="logo-tag">Solutions Banyuwangi</span>
                </div>
              </LogoRow>
              <BrandDesc>
                Jasa perbaikan software HP dan laptop terpercaya di Banyuwangi. Spesialis flashing HP, install ulang, unlock, bypass FRP & troubleshooting 24 jam nonstop.
              </BrandDesc>
              <SocialLinks>
                <SocialBtn href="https://wa.me/62816234185" target="_blank" aria-label="WhatsApp">
                  <WhatsappLogo size={18} weight="fill" />
                </SocialBtn>
                <SocialBtn href="https://instagram.com/athiief" target="_blank" aria-label="Instagram">
                  <InstagramLogo size={18} weight="fill" />
                </SocialBtn>
              </SocialLinks>
            </Brand>

            <Column>
              <ColTitle>Layanan</ColTitle>
              <LinkList>
                {[
                  'Perbaikan Software HP',
                  'Perbaikan Software Laptop',
                  'Install Ulang OS',
                  'Unlock & Bypass FRP',
                  'Flash Firmware',
                  'Optimasi Device',
                ].map(function(item) {
                  return (
                    <LinkItem key={item}>
                      <FooterLink href="#layanan">{item}</FooterLink>
                    </LinkItem>
                  );
                })}
              </LinkList>
            </Column>

            <Column>
              <ColTitle>Navigasi</ColTitle>
              <LinkList>
                {[
                  { label: 'Layanan', href: '#layanan' },
                  { label: 'Keunggulan', href: '#keunggulan' },
                  { label: 'Cara Kerja', href: '#' },
                  { label: 'Testimoni', href: '#' },
                  { label: 'FAQ', href: '#' },
                  { label: 'Lokasi', href: '#lokasi' },
                ].map(function(item) {
                  return (
                    <LinkItem key={item.label}>
                      <FooterLink href={item.href}>{item.label}</FooterLink>
                    </LinkItem>
                  );
                })}
              </LinkList>
            </Column>

            <Column>
              <ColTitle>Kontak</ColTitle>
              <ContactItem $color="#25D366">
                <WhatsappLogo size={16} weight="fill" />
                <span><strong>0816-234-185</strong></span>
              </ContactItem>
              <ContactItem $color="#EC4899">
                <InstagramLogo size={16} weight="fill" />
                <span>@athiief</span>
              </ContactItem>
              <ContactItem $color="#6366F1">
                <MapPin size={16} weight="duotone" />
                <span>Banyuwangi, Jawa Timur</span>
              </ContactItem>
              <ContactItem $color="#F59E0B">
                <Clock size={16} weight="duotone" />
                <span><strong>24 Jam</strong> — Senin s/d Minggu</span>
              </ContactItem>
            </Column>
          </Grid>
        </ScrollAnimation>

        <Divider />
        <Bottom>
          <Copyright>
            © {currentYear} Athif Software Solutions. Made with{' '}
            <Heart size={13} weight="fill" /> in Banyuwangi.
          </Copyright>
          <BottomLinks>
            <a href="#">Privasi</a>
            <a href="#">Syarat & Ketentuan</a>
          </BottomLinks>
        </Bottom>
      </Container>
    </Section>
  );
}
