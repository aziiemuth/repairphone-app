'use client';

import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1rem;
  }
`;

export default function Container({ children, ...props }) {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}
