import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 180px);
  padding-bottom: 80px;

  @media (min-width: 769px) {
    padding-bottom: 0;
  }
`;

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.sizes.spacing6}
    ${({ theme }) => theme.sizes.spacing4};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary900};
  text-align: center;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    padding-bottom: calc(
      ${({ theme }) => theme.sizes.spacing6} + 80px
    );
  }
`;
