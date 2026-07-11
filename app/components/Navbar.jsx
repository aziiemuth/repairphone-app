'use client';

import { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { List, X, DeviceMobile, WhatsappLogo, InstagramLogo, ArrowRight, House, Wrench, Star, Phone } from '@phosphor-icons/react';
import Container from './ui/Container';
import ThemeToggle from './ui/ThemeToggle';

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ $scrolled }) => ($scrolled ? '0.6rem 0' : '1.25rem 0')};
  background: ${({ $scrolled, theme }) =>
    $scrolled
      ? theme.colors.surface
      : 'transparent'};
  border-bottom: 1px solid ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.border : 'transparent'};
  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.shadowMd : 'none'};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;

  .logo-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 10px;
    color: white;
    transition: all ${({ theme }) => theme.transitions.spring};
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .logo-name {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.text : 'white')};
    letter-spacing: -0.02em;
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  .logo-tagline {
    font-size: 0.65rem;
    font-weight: 500;
    color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.primary : 'rgba(255, 255, 255, 0.85)')};
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  &:hover .logo-icon {
    transform: rotate(-10deg) scale(1.1);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadowHover};
  }

  &:hover .logo-name {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.textSecondary : 'rgba(255, 255, 255, 0.85)')};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 1px;
    transition: width ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.text : 'white')};
    background: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.primaryLight : 'rgba(255, 255, 255, 0.1)')};
  }

  &:hover::after {
    width: calc(100% - 2rem);
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CTANavButton = styled.a`
  display: none;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all ${({ theme }) => theme.transitions.spring};
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadowMd};

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadowHover};
  }

  svg {
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover svg {
    transform: translateX(3px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-flex;
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.surface : 'rgba(255, 255, 255, 0.1)')};
  border: 1px solid ${({ $scrolled, theme }) => ($scrolled ? theme.colors.border : 'rgba(255, 255, 255, 0.2)')};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.text : 'white')};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.primaryLight : 'rgba(255, 255, 255, 0.2)')};
    color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.primary : 'white')};
    border-color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.primary : 'rgba(255, 255, 255, 0.3)')};
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 85vw;
  max-width: 320px;
  background: ${({ theme }) => theme.colors.surface};
  z-index: 1001;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.2);
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const SidebarBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  .icon-wrap {
    width: 34px;
    height: 34px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .brand-name {
    font-weight: 700;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const CloseBtn = styled.button`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SidebarNav = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

const SidebarNavLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0 0.75rem;
  margin-bottom: 0.5rem;
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s ease;

  .link-icon {
    color: ${({ theme }) => theme.colors.textMuted};
    transition: all 0.2s;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    padding-left: 1rem;

    .link-icon {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateX(4px);
    }
  }
`;

const SidebarBottom = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SidebarCTA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: 100%;
  padding: 0.875rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadowMd};
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadowHover};
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

const SocialBtn = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gradient};
    color: white;
    border-color: transparent;
    transform: translateY(-2px);
  }
`;

const MobileBottomNav = styled.nav`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 1000;
  padding: 0.5rem 0.25rem;
  padding-bottom: calc(0.5rem + env(safe-area-inset-bottom, 0px));
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const BottomNavItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: all 0.2s ease;
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  .icon {
    transition: all 0.2s ease;
  }

  .label {
    font-size: 0.65rem;
    font-weight: 500;
  }

  &:hover, &:active {
    color: ${({ theme }) => theme.colors.primary};
    .icon {
      transform: translateY(-2px);
    }
  }
`;

const WHATSAPP_URL = 'https://wa.me/62816234185?text=' + encodeURIComponent('Halo, saya ingin konsultasi perbaikan software.');

const navLinks = [
  { href: '#layanan', label: 'Layanan' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#proses', label: 'Cara Kerja' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
  { href: '#lokasi', label: 'Lokasi' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar() {
  var [mobileOpen, setMobileOpen] = useState(false);
  var [scrolled, setScrolled] = useState(false);

  useEffect(function() {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return function() { window.removeEventListener('scroll', handleScroll); };
  }, []);

  function openSidebar() {
    setMobileOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Container>
          <NavContainer>
            <Logo href="#" $scrolled={scrolled}>
              <div className="logo-icon">
                <DeviceMobile size={22} weight="duotone" />
              </div>
              <div className="logo-text">
                <span className="logo-name">Athif Software</span>
                <span className="logo-tagline">Solutions Banyuwangi</span>
              </div>
            </Logo>

            <NavLinks>
              {navLinks.map(function(link) {
                return (
                  <NavLink key={link.href} href={link.href} $scrolled={scrolled}>
                    {link.label}
                  </NavLink>
                );
              })}
            </NavLinks>

            <NavActions>

              <ThemeToggle $scrolled={scrolled} />
              <MobileMenuBtn onClick={openSidebar} aria-label="Open menu" $scrolled={scrolled}>
                <List size={22} weight="bold" />
              </MobileMenuBtn>
            </NavActions>
          </NavContainer>
        </Container>
      </Nav>

      <Overlay $open={mobileOpen} onClick={closeSidebar} />

      <Sidebar $open={mobileOpen}>
        <SidebarHeader>
          <SidebarBrand>
            <div className="icon-wrap">
              <DeviceMobile size={18} weight="duotone" />
            </div>
            <span className="brand-name">Athif Software</span>
          </SidebarBrand>
          <CloseBtn onClick={closeSidebar} aria-label="Close menu">
            <X size={18} weight="bold" />
          </CloseBtn>
        </SidebarHeader>

        <SidebarNav>
          <SidebarNavLabel>Navigasi</SidebarNavLabel>
          {navLinks.map(function(link) {
            return (
              <SidebarLink
                key={link.href}
                href={link.href}
                onClick={closeSidebar}
              >
                {link.label}
                <ArrowRight size={16} weight="bold" className="link-icon" />
              </SidebarLink>
            );
          })}
        </SidebarNav>

        <SidebarBottom>
          <SidebarCTA href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsappLogo size={20} weight="fill" />
            Chat WhatsApp Sekarang
          </SidebarCTA>
          <SocialRow>
            <SocialBtn href="https://instagram.com/athiief" target="_blank" aria-label="Instagram">
              <InstagramLogo size={18} />
            </SocialBtn>
            <SocialBtn href={WHATSAPP_URL} target="_blank" aria-label="WhatsApp">
              <WhatsappLogo size={18} />
            </SocialBtn>
          </SocialRow>
        </SidebarBottom>
      </Sidebar>

      <MobileBottomNav>
        <BottomNavItem href="#">
          <House size={22} weight="duotone" className="icon" />
          <span className="label">Home</span>
        </BottomNavItem>
        <BottomNavItem href="#layanan">
          <Wrench size={22} weight="duotone" className="icon" />
          <span className="label">Layanan</span>
        </BottomNavItem>
        <BottomNavItem href="#testimoni">
          <Star size={22} weight="duotone" className="icon" />
          <span className="label">Testimoni</span>
        </BottomNavItem>
        <BottomNavItem as="button" onClick={openSidebar}>
          <List size={22} weight="duotone" className="icon" />
          <span className="label">Menu</span>
        </BottomNavItem>
      </MobileBottomNav>
    </>
  );
}
