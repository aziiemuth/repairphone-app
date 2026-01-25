'use client';

import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const TypeWriterText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  
  &::after {
    content: '|';
    position: absolute;
    right: -8px;
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`;

const words = [
  'Handphone',
  'Laptop',
  'Android',
  'iPhone',
  'Windows',
  'MacBook',
];

export default function TypeWriter() {
  var [currentWordIndex, setCurrentWordIndex] = useState(0);
  var [currentText, setCurrentText] = useState('');
  var [isDeleting, setIsDeleting] = useState(false);
  var timeoutRef = useRef(null);

  useEffect(function() {
    var currentWord = words[currentWordIndex];
    var typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentText === currentWord) {
      // Wait before starting to delete
      timeoutRef.current = setTimeout(function() {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentText === '') {
      // Move to next word
      setIsDeleting(false);
      setCurrentWordIndex(function(prev) {
        return (prev + 1) % words.length;
      });
    } else {
      // Type or delete
      timeoutRef.current = setTimeout(function() {
        setCurrentText(function(prev) {
          if (isDeleting) {
            return prev.slice(0, -1);
          }
          return currentWord.slice(0, prev.length + 1);
        });
      }, typeSpeed);
    }

    return function() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, isDeleting, currentWordIndex]);

  return <TypeWriterText>{currentText}</TypeWriterText>;
}
