import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.primary500};
  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.spacing6}
    ${({ theme }) => theme.sizes.spacing4};
`;

export const Logo = styled.strong`
  font-size: 20px;
  font-weight: 800;
`;
