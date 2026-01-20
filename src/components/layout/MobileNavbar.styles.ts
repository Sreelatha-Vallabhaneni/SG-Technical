import { NavItemProps } from '@src/typings/layout-components';
import styled from 'styled-components';



export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  background-color: ${p => p.theme.colors.primary700};
  z-index: 100;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavItem = styled.button<NavItemProps>`
  flex: 1;
  background: none;
  border: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.primary300};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const NavIcon = styled.div`
  margin-bottom: 4px;
`;

export const NavLabel = styled.span`
  line-height: 1;
`;
