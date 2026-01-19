import React from 'react';
import styled from 'styled-components';
import Container from './Container';

export default function Header() {
  return (
    <HeaderCss>
      <ContainerCss>
        <strong>Shape Games</strong>

        <MyBetsButtonCss onClick={() => alert('open/close sidebar')}>
          My Bets
        </MyBetsButtonCss>
      </ContainerCss>
    </HeaderCss>
  );
}

const HeaderCss = styled.header`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary500};
`;

const ContainerCss = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.sizes.spacing6} ${p => p.theme.sizes.spacing4};
`;

const MyBetsButtonCss = styled.button`
  border: 1px solid ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.white};
  background-color: transparent;
`;
