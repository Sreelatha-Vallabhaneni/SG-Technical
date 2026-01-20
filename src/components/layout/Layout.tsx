'use client';

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@src/styles/theme';

import Header from './Header';
import Sidebar from './Sidebar';


import { LayoutProps } from '@src/typings/layout-components';
import MobileNav from './MobileNavbar';
import { Footer, Main } from './Layout.styles';
import Container from '../ui/Container';

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Header onMyBetsClick={() => setIsSidebarOpen(true)} />

      <Main>{children}</Main>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <MobileNav onMyBetsClick={() => setIsSidebarOpen(true)} />

      <Footer>
        <Container maxWidth={700}>
          <p>© 2023 All rights reserved. Shape Games</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, ex!
           Est, explicabo. Dolorem sed labore, hic libero ea quaerat reiciendis
           excepturi provident at impedit earum, perferendis a, mollitia id
           tenetur?</p>
        </Container>
      </Footer>
    </ThemeProvider>
  );
}
