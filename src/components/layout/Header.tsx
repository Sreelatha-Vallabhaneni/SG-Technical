'use client';

import { HeaderWrapper, HeaderContainer, Logo } from './Header.styles';
import Button from '../ui/Button';

import { HeaderProps } from '@src/typings/layout-components';
import Container from '../ui/Container';

export default function Header({ onMyBetsClick }: HeaderProps) {
  return (
    <HeaderWrapper>
      <HeaderContainer as={Container}>
        <Logo>Shape Games</Logo>

        <Button variant="outline" onClick={onMyBetsClick}>
          My Bets
        </Button>
      </HeaderContainer>
    </HeaderWrapper>
  );
}