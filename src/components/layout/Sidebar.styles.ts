import styled from 'styled-components';
import { StyledButtonProps} from '@src/typings/layout-components';

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 440px;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.gray300};
  z-index: 1001;
  padding: ${({ theme }) => theme.sizes.spacing4};

  @media (max-width: 767px) {
    width: 100%;
  }
`;


export const CloseButton = styled.button<StyledButtonProps>`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  &:hover {
    opacity: 0.7;
  }
`;