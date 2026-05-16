'use client';

import styled, { keyframes } from 'styled-components';
import { ShieldCheck, Wrench, SealCheck, Clock, Trophy, Star } from '@phosphor-icons/react';
import Container from './ui/Container';

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Bar = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  padding: 0;
  position: relative;
  overflow: hidden;
  display: flex;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

const TrackWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  align-items: stretch;
  width: max-content;
  animation: ${marquee} 25s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.125rem 2.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  position: relative;
  transition: background 0.25s ease;
  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  color: white;
  flex-shrink: 0;
`;

const Label = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
`;

const trustItems = [
  { Icon: ShieldCheck, label: 'Data & Privasi Aman' },
  { Icon: Wrench, label: 'Teknisi Berpengalaman' },
  { Icon: Clock, label: 'Layanan 24 Jam' },
  { Icon: SealCheck, label: 'Garansi 30 Hari' },
  { Icon: Trophy, label: '#1 di Banyuwangi' },
  { Icon: Star, label: 'Rating 4.9/5' },
];

export default function TrustBar() {
  // We duplicate the items to make the seamless infinite scroll work
  const marqueeItems = [...trustItems, ...trustItems];

  return (
    <Bar>
      <TrackWrap>
        <Track>
          {marqueeItems.map(function(item, idx) {
            return (
              <Item key={idx}>
                <IconWrap>
                  <item.Icon size={18} weight="duotone" />
                </IconWrap>
                <Label>{item.label}</Label>
              </Item>
            );
          })}
        </Track>
      </TrackWrap>
    </Bar>
  );
}
