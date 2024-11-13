import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background || '#fff'};
    color: ${({ theme }) => theme.colors.text || '#000'};
  }

  #root {
    min-height: 100vh;
  }
`; 