import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@src/styles/theme';
import Sidebar from './Sidebar';
import Header from './Header';
import Container from './Container';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <main style={{ minHeight: '80vh' }}>{props.children}</main>

      <Sidebar />

      <FooterCss>
        <Container style={{ maxWidth: 700 }}>
          <p>© 2023 All rights reserved. Shape Games</p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, ex!
          Est, explicabo. Dolorem sed labore, hic libero ea quaerat reiciendis
          excepturi provident at impedit earum, perferendis a, mollitia id
          tenetur?
        </Container>
      </FooterCss>
    </ThemeProvider>
  );
}

const FooterCss = styled.footer`
  padding: ${p => p.theme.sizes.spacing6} ${p => p.theme.sizes.spacing4};
  font-size: 12px;
  color: ${p => p.theme.colors.primary300};
  text-align: center;
  background-color: ${p => p.theme.colors.primary900};
`;
