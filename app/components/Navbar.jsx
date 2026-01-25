'use client';

import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { List, X, DeviceMobile, WhatsappLogo, InstagramLogo } from '@phosphor-icons/react';
import Container from './ui/Container';
import ThemeToggle from './ui/ThemeToggle';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ $scrolled }) => ($scrolled ? '0.75rem 0' : '1.5rem 0')};
  background: ${({ $scrolled, theme }) => 
    $scrolled ? theme.colors.surface : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  border-bottom: 1px solid ${({ $scrolled, theme }) => 
    $scrolled ? theme.colors.border : 'transparent'};
  box-shadow: ${({ $scrolled, theme }) => 
    $scrolled ? `0 10px 30px ${theme.colors.shadow}` : 'none'};
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.fast};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  opacity: 0.9;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MobileMenuBtn = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  z-index: 1002;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

// Overlay when Sidebar is open
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
`;

// Sidebar Drawer
const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background: ${({ theme }) => theme.colors.surface};
  z-index: 1001;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  
  /* Ensure sidebar is scrollable on small screens if content overflows */
  overflow-y: auto;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const SidebarLogo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CloseBtn = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.primary};
    padding-left: 1.5rem;
  }
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialBtn = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

export default function Navbar() {
  var [mobileOpen, setMobileOpen] = useState(false);
  var [scrolled, setScrolled] = useState(false);

  useEffect(function() {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return function() { window.removeEventListener('scroll', handleScroll); };
  }, []);

  var links = [
    { href: '#layanan', label: 'Layanan' },
    { href: '#keunggulan', label: 'Keunggulan' },
    { href: '#lokasi', label: 'Lokasi' },
    { href: '#kontak', label: 'Kontak' },
  ];

  function toggleSidebar() {
    setMobileOpen(!mobileOpen);
    if (!mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  function closeSidebar() {
    setMobileOpen(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Container>
          <NavContainer>
            <Logo href="#">
              <DeviceMobile size={28} weight="duotone" />
              Software Fix
            </Logo>

            <NavLinks>
              {links.map(function(link) {
                return (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                );
              })}
            </NavLinks>

            <NavActions>
              <ThemeToggle />
              <MobileMenuBtn onClick={toggleSidebar}>
                <List size={24} weight="bold" />
              </MobileMenuBtn>
            </NavActions>
          </NavContainer>
        </Container>
      </Nav>

      <Overlay $open={mobileOpen} onClick={closeSidebar} />
      
      <Sidebar $open={mobileOpen}>
        <SidebarHeader>
          <SidebarLogo>
            <DeviceMobile size={24} weight="duotone" />
            Menu
          </SidebarLogo>
          <CloseBtn onClick={closeSidebar}>
            <X size={20} weight="bold" />
          </CloseBtn>
        </SidebarHeader>

        <SidebarLinks>
          {links.map(function(link) {
            return (
              <SidebarLink 
                key={link.href} 
                href={link.href}
                onClick={closeSidebar}
              >
                {link.label}
              </SidebarLink>
            );
          })}
        </SidebarLinks>

        <SidebarFooter>
          <div style={{ textAlign: 'center', fontSize: '0.875rem', color: '#888' }}>
            Ikuti Kami
          </div>
          <SocialRow>
            <SocialBtn href="https://instagram.com/athiief" target="_blank">
              <InstagramLogo size={20} />
            </SocialBtn>
            <SocialBtn href="https://wa.me/620816234185" target="_blank">
              <WhatsappLogo size={20} />
            </SocialBtn>
          </SocialRow>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
