'use client';

import styled from 'styled-components';
import {
  DeviceMobile,
  Heart,
  WhatsappLogo,
  InstagramLogo,
  MapPin,
  Clock,
} from '@phosphor-icons/react';
import Container from './ui/Container';
import ScrollAnimation from './ui/ScrollAnimation';

const Section = styled.footer`
  background: ${({ theme }) =>
    theme.isDark ? theme.colors.backgroundAlt : '#18181B'};
  padding: 4rem 0 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: calc(4.5rem + env(safe-area-inset-bottom, 0px));
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Brand = styled.div``;

const LogoRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1rem;

  .logo-icon {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .logo-name {
    font-size: 1.0625rem;
    font-weight: 700;
    color: white;
    letter-spacing: -0.02em;
  }

  .logo-tag {
    font-size: 0.625rem;
    color: rgba(255,255,255,0.45);
    display: block;
    letter-spacing: 0.02em;
  }
`;

const BrandDesc = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.7;
  max-width: 260px;
  margin-bottom: 1.25rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialBtn = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease;

  &:hover {
    background: #0EA5E9;
    border-color: transparent;
    color: white;
    transform: translateY(-2px);
  }
`;

const Column = styled.div``;

const ColTitle = styled.h4`
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LinkItem = styled.li``;

const FooterLink = styled.a`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
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
  gap: 0.5rem;
  margin-bottom: 0.625rem;

  svg {
    color: #0EA5E9;
    margin-top: 2px;
    flex-shrink: 0;
  }

  span {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.5;

    strong {
      color: rgba(255, 255, 255, 0.75);
      font-weight: 600;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 3rem;
`;

const Bottom = styled.div`
  padding: 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Copyright = styled.p`
  font-size: 0.775rem;
  color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;

  svg { color: #ef4444; }
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.25rem;

  a {
    font-size: 0.775rem;
    color: rgba(255, 255, 255, 0.3);
    transition: color 0.2s ease;

    &:hover { color: rgba(255, 255, 255, 0.6); }
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
                  <DeviceMobile size={20} weight="duotone" />
                </div>
                <div>
                  <span className="logo-name">Athif Software</span>
                  <span className="logo-tag">Solutions Banyuwangi</span>
                </div>
              </LogoRow>
              <BrandDesc>
                Jasa perbaikan software HP dan laptop terpercaya di Banyuwangi. Layanan 24 jam nonstop.
              </BrandDesc>
              <SocialLinks>
                <SocialBtn href="https://wa.me/62816234185" target="_blank" aria-label="WhatsApp">
                  <WhatsappLogo size={16} weight="fill" />
                </SocialBtn>
                <SocialBtn href="https://instagram.com/athiief" target="_blank" aria-label="Instagram">
                  <InstagramLogo size={16} weight="fill" />
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
                  { label: 'Cara Kerja', href: '#proses' },
                  { label: 'Testimoni', href: '#testimoni' },
                  { label: 'FAQ', href: '#faq' },
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
              <ContactItem>
                <WhatsappLogo size={15} weight="fill" />
                <span><strong>0816-234-185</strong></span>
              </ContactItem>
              <ContactItem>
                <InstagramLogo size={15} weight="fill" />
                <span>@athiief</span>
              </ContactItem>
              <ContactItem>
                <MapPin size={15} weight="duotone" />
                <span>Banyuwangi, Jawa Timur</span>
              </ContactItem>
              <ContactItem>
                <Clock size={15} weight="duotone" />
                <span><strong>24 Jam</strong> Senin s/d Minggu</span>
              </ContactItem>
            </Column>
          </Grid>
        </ScrollAnimation>

        <Divider />
        <Bottom>
          <Copyright>
            &copy; {currentYear} Athif Software Solutions. Made with{' '}
            <Heart size={12} weight="fill" /> in Banyuwangi.
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
