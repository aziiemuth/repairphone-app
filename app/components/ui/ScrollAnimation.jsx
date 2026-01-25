'use client';

import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const animations = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

const AnimatedWrapper = styled.div`
  opacity: 0;
  
  ${({ $isVisible, $animation, $duration, $delay }) =>
    $isVisible &&
    css`
      animation: ${animations[$animation] || fadeInUp} ${$duration}s ease forwards;
      animation-delay: ${$delay}s;
    `}
`;

export default function ScrollAnimation({ 
  children, 
  animation = 'fadeInUp',
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(function setupObserver() {
    var element = ref.current;
    if (!element) return;

    var observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold }
    );

    observer.observe(element);

    return function cleanup() {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return (
    <AnimatedWrapper
      ref={ref}
      $isVisible={isVisible}
      $animation={animation}
      $duration={duration}
      $delay={delay}
      className={className}
    >
      {children}
    </AnimatedWrapper>
  );
}
