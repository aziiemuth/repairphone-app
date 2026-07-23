'use client';

import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { List, X, DeviceMobile, WhatsappLogo, InstagramLogo, ArrowRight, House, Wrench, Star, Phone } from '@phosphor-icons/react';
import Container from './ui/Container';
import ThemeToggle from './ui/ThemeToggle';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ $scrolled }) => ($scrolled ? '0.5rem 0' : '1rem 0')};
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
  height: 48px;
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
    width: 36px;
    height: 36px;
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
    letter-spacing: 0.02em;
  }

  &:hover .logo-icon {
    transform: rotate(-6deg) scale(1.08);
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
  padding: 0.5rem 0.875rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.textSecondary : 'rgba(255, 255, 255, 0.85)')};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;

  &:hover {
    color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.text : 'white')};
    background: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.primaryLight : 'rgba(255, 255, 255, 0.1)')};
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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
  width: 44px;
  height: 44px;
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
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

const SocialBtn = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
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
  justify-content: center;
  gap: 0.25rem;
  min-height: 48px;
  min-width: 48px;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: all 0.2s ease;
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0;

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
];

export default function Navbar() {
  var [mobileOpen, setMobileOpen] = useState(false);
  var [scrolled, setScrolled] = useState(false);
  var sentinelRef = useRef(null);

  useEffect(function() {
    // Use IntersectionObserver instead of scroll listener
    var sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:60px;height:1px;width:1px;pointer-events:none;';
    document.body.prepend(sentinel);
    sentinelRef.current = sentinel;

    var observer = new IntersectionObserver(
      function(entries) {
        setScrolled(!entries[0].isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(sentinel);

    return function() {
      observer.disconnect();
      if (sentinel.parentNode) sentinel.parentNode.removeChild(sentinel);
    };
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
            <Logo href="#" $scrolled={scrolled} aria-label="Athif Software Solutions Banyuwangi - Beranda">
              <div className="logo-icon">
                <DeviceMobile size={20} weight="duotone" />
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
          <CloseBtn onClick={closeSidebar} aria-label="Tutup menu navigasi">
            <X size={18} weight="bold" />
          </CloseBtn>
        </SidebarHeader>

        <SidebarNav>
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
          <SidebarCTA
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi kami via WhatsApp"
          >
            <WhatsappLogo size={20} weight="fill" />
            Hubungi Kami
          </SidebarCTA>
          <SocialRow>
            <SocialBtn href="https://instagram.com/athiief" target="_blank" aria-label="Kunjungi profil Instagram Athif Software">
              <InstagramLogo size={18} />
            </SocialBtn>
            <SocialBtn href={WHATSAPP_URL} target="_blank" aria-label="Chat WhatsApp Athif Software">
              <WhatsappLogo size={18} />
            </SocialBtn>
          </SocialRow>
        </SidebarBottom>
      </Sidebar>

      <MobileBottomNav>
        <BottomNavItem href="#" aria-label="Navigasi ke Beranda">
          <House size={22} weight="duotone" className="icon" />
          <span className="label">Home</span>
        </BottomNavItem>
        <BottomNavItem href="#layanan" aria-label="Navigasi ke bagian Layanan">
          <Wrench size={22} weight="duotone" className="icon" />
          <span className="label">Layanan</span>
        </BottomNavItem>
        <BottomNavItem href="#testimoni" aria-label="Navigasi ke bagian Testimoni">
          <Star size={22} weight="duotone" className="icon" />
          <span className="label">Testimoni</span>
        </BottomNavItem>
        <BottomNavItem as="button" onClick={openSidebar} aria-label="Buka menu navigasi utama">
          <List size={22} weight="duotone" className="icon" />
          <span className="label">Menu</span>
        </BottomNavItem>
      </MobileBottomNav>
    </>
  );
}
