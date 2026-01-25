'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { List, X, DeviceMobile } from '@phosphor-icons/react';
import Container from './ui/Container';
import ThemeToggle from './ui/ThemeToggle';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
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
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;

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
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem;
  box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadow};
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
  }
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function Navbar() {
  var [mobileOpen, setMobileOpen] = useState(false);

  var links = [
    { href: '#layanan', label: 'Layanan' },
    { href: '#keunggulan', label: 'Keunggulan' },
    { href: '#lokasi', label: 'Lokasi' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <>
      <Nav>
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
              <MobileMenuBtn onClick={function() { setMobileOpen(!mobileOpen); }}>
                {mobileOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
              </MobileMenuBtn>
            </NavActions>
          </NavContainer>
        </Container>
      </Nav>

      <MobileMenu $open={mobileOpen}>
        {links.map(function(link) {
          return (
            <MobileNavLink 
              key={link.href} 
              href={link.href}
              onClick={function() { setMobileOpen(false); }}
            >
              {link.label}
            </MobileNavLink>
          );
        })}
      </MobileMenu>
    </>
  );
}
