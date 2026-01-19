import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  body{
    text-size-adjust: 100%;
    font-family: 'Inter', sans-serif;
    background-color: ${p => p.theme.colors.background};
  }

  h1,h2,h3,h4,h5,h6{
    margin-top: 0;
  }
`;
