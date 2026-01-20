import styled, { css } from 'styled-components';

export const ButtonBase = styled.button<{ $variant: 'primary' | 'outline' }>`
  padding: ${({ theme }) => theme.sizes.spacing2}
    ${({ theme }) => theme.sizes.spacing4};
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s ease;

  ${({ $variant, theme }) =>
    $variant === 'outline' &&
    css`
      background: transparent;
      border: 1px solid ${theme.colors.white};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary700};
      }
    `}

  @media (max-width: 768px) {
    display: none;
  }
`;
